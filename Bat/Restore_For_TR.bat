@echo off

git status
goto MAIN

:Message
	set /p message=< mssg.txt

:Colors
	powershell write-host -fore %1 -back %2 %3
	exit /b

:MAIN
	git restore .
 	git status
	echo.
	call :Colors "White" "Orange" "The last commit date:   %message%"
	call :Colors "Yellow" "DarkGreen" "The files have been restored successfully!"
	timeout /t 3
	exit

