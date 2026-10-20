@echo off
title AeroReady AI - SIH26249 Local Server (Port 8090)
echo =========================================================
echo  Starting AeroReady AI on Port 8090...
echo  (Avoids port 8080 conflict with other running projects)
echo =========================================================
powershell -ExecutionPolicy Bypass -File "%~dp0start-server.ps1" -Port 8090
pause
