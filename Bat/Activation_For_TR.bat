@echo off

git status

:EnterMSG
	set /p enter_message=Enter the commit message: 
	if not defined enter_message goto NoneMSG
	if /i %enter_message%==^date (goto DateMSG) else goto NewMSG

:DateMSG
	echo Uploaded %date% %time% > Bat/mssg.txt
	set /p message=< Bat/mssg.txt
	goto Push_Or_Pull
	
:NewMSG
	echo %enter_message% %date% %time% > Bat/mssg.txt
	set /p message=< Bat/mssg.txt
	goto Push_Or_Pull

:NoneMSG
	set /p message=< Bat/mssg.txt
	goto Push_Or_Pull

:Push_Or_Pull
	goto EnterCMD

:EnterCMD
	set /p enter_command="Push or Pull? (push/pull):"
	if /i %enter_command%==^Push (goto Push) else (if /i %enter_command%==^pull (goto Pull) else (goto Push_Or_Pull))

:Push
	git add .
	git commit -m "%message%"
	git status
	git push
	goto MAIN

:Pull
	git commit -m "%message%"
	git status
	git pull
	git restore .
	goto MAIN

:MAIN
	cd ..
	start "Activation" sublime_text
 	cd Test_Repository/
 	browser-sync start --server --direction --files "**/*"