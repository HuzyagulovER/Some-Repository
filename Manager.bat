@echo off
echo ^<Command list^>: act ^| push ^| restore ^| reload ^| exit

:Loop
	goto Manage_Menu

:Manage_Menu
	set cmd=
	set /p cmd=^<Enter command^>:
	if not defined cmd goto Manage_Menu
	if %cmd%==null goto Manage_Menu
	if /i %cmd%==act (start Bat\Activation_For_TR.bat & goto Manage_Menu)
	if /i %cmd%==push (start Bat\Push_For_TR.bat & goto Manage_Menu)
	if /i %cmd%==exit (exit)
	if /i %cmd%==reload (start Manager.bat & exit)
	call :Colors
	goto Manage_Menu
	pause

:Colors
	powershell write-host -fore Red "%cmd% is undefined command!"
	exit /b