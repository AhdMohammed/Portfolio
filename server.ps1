# Robust HTTP Static Server for Local Testing
$port = 4173
$root = $PSScriptRoot

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".svg"   = "image/svg+xml"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".webp"  = "image/webp"
    ".mp4"   = "video/mp4"
    ".json"  = "application/json; charset=utf-8"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Server running at http://localhost:$port/"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        try {
            $req = $context.Request
            $res = $context.Response

            $rawPath = $req.Url.LocalPath
            if ($rawPath -eq "/" -or $rawPath -eq "") {
                $rawPath = "/index.html"
            }

            $decodedPath = [System.Uri]::UnescapeDataString($rawPath)
            $relPath = $decodedPath.TrimStart("/").Replace("/", "\")
            $filePath = Join-Path $root $relPath

            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                
                $fileInfo = New-Object System.IO.FileInfo($filePath)
                $totalLength = $fileInfo.Length

                $res.ContentType = $contentType
                $res.AddHeader("Accept-Ranges", "bytes")

                if ($req.HttpMethod -eq "HEAD") {
                    $res.StatusCode = 200
                    $res.ContentLength64 = $totalLength
                } else {
                    $rangeHeader = $req.Headers["Range"]
                    if ($rangeHeader -and $rangeHeader.StartsWith("bytes=")) {
                        $range = $rangeHeader.Substring(6).Split("-")
                        $start = [int64]::Parse($range[0])
                        $end = if ($range[1] -ne "") { [int64]::Parse($range[1]) } else { $totalLength - 1 }
                        if ($end -ge $totalLength) { $end = $totalLength - 1 }
                        $length = $end - $start + 1

                        $res.StatusCode = 206
                        $res.AddHeader("Content-Range", "bytes $start-$end/$totalLength")
                        $res.ContentLength64 = $length

                        $stream = [System.IO.File]::OpenRead($filePath)
                        $stream.Seek($start, [System.IO.SeekOrigin]::Begin) | Out-Null
                        $buffer = New-Object byte[] 65536
                        $remaining = $length
                        while ($remaining -gt 0) {
                            $toRead = [Math]::Min([int64]$buffer.Length, $remaining)
                            $bytesRead = $stream.Read($buffer, 0, $toRead)
                            if ($bytesRead -le 0) { break }
                            $res.OutputStream.Write($buffer, 0, $bytesRead)
                            $remaining -= $bytesRead
                        }
                        $stream.Close()
                    } else {
                        $res.StatusCode = 200
                        $res.ContentLength64 = $totalLength
                        $stream = [System.IO.File]::OpenRead($filePath)
                        $buffer = New-Object byte[] 65536
                        while (($bytesRead = $stream.Read($buffer, 0, $buffer.Length)) -gt 0) {
                            $res.OutputStream.Write($buffer, 0, $bytesRead)
                        }
                        $stream.Close()
                    }
                }
            } else {
                $res.StatusCode = 404
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
                $res.ContentLength64 = $errBytes.Length
                $res.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
        } catch {
            # Log error without terminating server
            Write-Warning $_
        } finally {
            try { $context.Response.OutputStream.Close() } catch {}
        }
    }
} catch {
    Write-Error $_
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}
