@echo off

cd Test_Repository/
git status

:EnterMSG
	set /p enter_message=Enter the commit message: 
	if not defined enter_message goto NoneMSG
	if /i %enter_message%==^date (goto DateMSG) else goto NewMSG

:DateMSG
	echo Uploaded %date% %time% > C:\Users\User\Desktop\EduarD\Test_Repository\mssg.txt
	set /p message=< C:\Users\User\Desktop\EduarD\Test_Repository\mssg.txt
	goto Push_Or_Pull
	
:NewMSG
	echo %enter_message% %date% %time% > C:\Users\User\Desktop\EduarD\Test_Repository\mssg.txt
	set /p message=< C:\Users\User\Desktop\EduarD\Test_Repository\mssg.txt
	goto Push_Or_Pull

:NoneMSG
	set /p message=< C:\Users\User\Desktop\EduarD\Test_Repository\mssg.txt
	goto Push_Or_Pull

git commit -m "%message%"

:Push_Or_Pull
	goto EnterCMD

:EnterCMD
	set /p enter_command="Push or Pull? (push/pull):"
	if /i %enter_command%==^Push (goto Push) else (if /i %enter_command%==^pull (goto Pull) else (goto Push_Or_Pull))

:Push
	git add .
	git status
	git push
	goto MAIN

:Pull
	git status
	git pull
	goto MAIN

:MAIN
	cd ..
	start "Activation" sublime_text
 	cd Test_Repository/
 	browser-sync start --server --direction --files "**/*"