param(
    [int]$Port = 8090
)

$HostAddress = [System.Net.IPAddress]::Loopback
$Listener = New-Object System.Net.Sockets.TcpListener($HostAddress, $Port)

try {
    $Listener.Start()
} catch {
    $Port = 8081
    $Listener = New-Object System.Net.Sockets.TcpListener($HostAddress, $Port)
    $Listener.Start()
}

$CurrentDir = $PSScriptRoot
if (-not $CurrentDir) { $CurrentDir = (Get-Location).Path }

$LocalUrl = "http://localhost:$Port"
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " AEROREADY AI -- SIH26249 LOCAL SERVER ACTIVE" -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host " Local Web URL: $LocalUrl" -ForegroundColor Yellow
Write-Host " Serving Files From: $CurrentDir"
Write-Host " Press Ctrl+C in this console to stop server"
Write-Host "=================================================================" -ForegroundColor Cyan

try {
    Start-Process $LocalUrl
} catch {}

while ($true) {
    try {
        $Client = $Listener.AcceptTcpClient()
        $Stream = $Client.GetStream()
        $Reader = New-Object System.IO.StreamReader($Stream)
        $Writer = New-Object System.IO.StreamWriter($Stream)

        $RequestLine = $Reader.ReadLine()
        if (-not $RequestLine) {
            $Client.Close()
            continue
        }

        $Parts = $RequestLine -split ' '
        $UrlPath = $Parts[1]
        if ($UrlPath.Contains('?')) {
            $UrlPath = $UrlPath.Substring(0, $UrlPath.IndexOf('?'))
        }
        if ($UrlPath -eq '/' -or $UrlPath -eq '') {
            $UrlPath = '/index.html'
        }

        $RelPath = $UrlPath.TrimStart('/').Replace('/', '\')
        $FilePath = Join-Path $CurrentDir $RelPath

        if (Test-Path $FilePath -PathType Leaf) {
            $Ext = [System.IO.Path]::GetExtension($FilePath).ToLower()
            $ContentType = 'text/plain; charset=utf-8'
            if ($Ext -eq '.html') { $ContentType = 'text/html; charset=utf-8' }
            elseif ($Ext -eq '.css') { $ContentType = 'text/css; charset=utf-8' }
            elseif ($Ext -eq '.js') { $ContentType = 'application/javascript; charset=utf-8' }
            elseif ($Ext -eq '.json') { $ContentType = 'application/json; charset=utf-8' }
            elseif ($Ext -eq '.svg') { $ContentType = 'image/svg+xml' }

            $FileBytes = [System.IO.File]::ReadAllBytes($FilePath)
            $Len = $FileBytes.Length

            $Writer.WriteLine('HTTP/1.1 200 OK')
            $Writer.WriteLine("Content-Type: $ContentType")
            $Writer.WriteLine("Content-Length: $Len")
            $Writer.WriteLine('Connection: close')
            $Writer.WriteLine('Access-Control-Allow-Origin: *')
            $Writer.WriteLine('')
            $Writer.Flush()

            $Stream.Write($FileBytes, 0, $Len)
            $Stream.Flush()
        } else {
            $Msg = '404 Not Found: ' + $UrlPath
            $Len = $Msg.Length
            $Writer.WriteLine('HTTP/1.1 404 Not Found')
            $Writer.WriteLine('Content-Type: text/plain; charset=utf-8')
            $Writer.WriteLine("Content-Length: $Len")
            $Writer.WriteLine('Connection: close')
            $Writer.WriteLine('')
            $Writer.WriteLine($Msg)
            $Writer.Flush()
        }

        $Client.Close()
    } catch {
        # ignore client disconnects
    }
}
