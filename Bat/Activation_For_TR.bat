@echo off

if defined access (del access.txt & goto SYNC_ACT) else (goto Push_Or_Pull)

:Push_Or_Pull
	git status
	goto EnterCMD

:EnterCMD
	set /p enter_command="Push or Pull? (push/pull): " 
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

:SYNC_ACT
	title Synchronization Activation...

	echo.
	echo.
	call :Colors "Green" "Black" "'						Welcome to Synchronization!						'"

	cd ..
	start "Activation" "C:\Program Files\Sublime Text 3\sublime_text.exe"
	echo.
	if errorlevel 1 (call :Colors "DarkRed" "Black" "'Ooops... Something goes wrong.'" & goto Exit)
 	cd Some-Repository/
 	title Synchronization Activated
 	browser-sync start --server --direction --files "**/*"

:Exit
	timeout /t 5
	exit

:Colors
	powershell write-host -fore %1 -back %2 %3
	exit /b