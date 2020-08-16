@echo off

cd ..
git status
set /p enter_message="Enter the commit message: "
if not defined enter_message goto NoneMSG
if %enter_message%==^date (goto DateMSG) else goto NewMSG
::if %enter_message%==^date goto DateMSG
::if defined enter_message () else echo N

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

:MAIN
	git add .
	git commit -m "%message%"
 	git status
	git push
	exit