@echo off

git status

:Colors
	powershell write-host -fore Yellow -back DarkGreen %1
	exit /b

:MAIN
	git re
	git commit -m "%message%"
 	git status
	git push
	echo.
	call :Colors "The files have been pushed successfully!"
	timeout /t 3
	exit