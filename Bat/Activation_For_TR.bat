@echo off

git status

:Push_Or_Pull
	goto EnterCMD

:EnterCMD
	set /p enter_command="Push or Pull? (push/pull):"
	if /i %enter_command%==^Push (goto Push) else (if /i %enter_command%==^pull (goto Pull) else (goto Push_Or_Pull))

:Push
	set access=DoNotClose
	call Bat\Push_For_TR.bat
	goto MAIN_ACT

:Pull
	git commit -m "%message%"
	git status
	git pull
	git status
	git restore .
	git status
	goto MAIN_ACT

:MAIN_ACT
	cd ..
	start "Activation" sublime_text
 	cd Test_Repository/
 	browser-sync start --server --direction --files "**/*"