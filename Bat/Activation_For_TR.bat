@echo off

git status

:Push_Or_Pull
	goto EnterCMD

:EnterCMD
	if %access%==sync (set /p enter_command="Push, Pull or Sync? (push/pull/sync): ") else (set /p enter_command="Push or Pull? (push/pull): ")
	if /i %enter_command%==push (goto Push) else (if /i %enter_command%==pull (goto Pull) else (if %enter_command%==sync (goto MAIN_ACT) else (goto Push_Or_Pull)))

:Push
	call Bat\Push_For_TR.bat
	goto MAIN_ACT

:Pull
	call Bat\Pull_For_TR.bat
	goto MAIN_ACT

:MAIN_ACT
	title Activation...
	cd ..
	start "Activation" sublime_text
 	cd Test_Repository/
 	title Activated
 	browser-sync start --server --direction --files "**/*"