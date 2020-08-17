@echo off

git status
set /p enter_message="Enter the commit message: "
if not defined enter_message goto NoneMSG
if %enter_message%==^date (goto DateMSG) else goto NewMSG

pause

:DateMSG
	echo Uploaded %date% %time% > Bat/mssg.txt
	set /p message=< Bat/mssg.txt
	goto MAIN
	
:NewMSG
	echo %enter_message% %date% %time% > Bat/mssg.txt
	set /p message=< Bat/mssg.txt
	goto MAIN

:NoneMSG
	set /p message=< Bat/mssg.txt
	goto MAIN

:Colors
	powershell write-host -fore Yellow -back DarkGreen %1
	exit /b

:MAIN
	git add .
	git commit -m "%message%"
 	git status
	git push
	echo.
	call :Colors "The files have been pushed successfully!"
	timeout /t 3
	exit