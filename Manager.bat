@echo off
echo ^<Command list^>: act ^| push ^| restore ^| exit

:Loop
	goto Manage_Menu

:Manage_Menu
	set /p cmd=^<Enter command^>:
	if not defined cmd goto Manage_Menu 
	if /i %cmd%==act (start Bat\Activation_For_TR.bat & goto Loop)
	if /i %cmd%==push (start Bat\Push_For_TR.bat & goto Loop)
	if /i %cmd%==exit (exit)
	pause