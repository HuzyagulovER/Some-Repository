@echo off

title Restore
set /p message=< Bat\mssg.txt

goto MAIN

:Colors
	powershell write-host -fore %1 -back %2 %3
	exit /b

:MAIN
	git restore .
 	git status
	echo.
	call :Colors "Black" "DarkYellow" "The last commit message:   %message%"
	echo.
	call :Colors "Yellow" "DarkGreen" "The files have been restored successfully!"
	timeout /t 3
	pause
	exit

