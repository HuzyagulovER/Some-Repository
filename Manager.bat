@echo off
echo ^<Command list^>: act ^| rest ^| 

:Loop
	goto Manage_Menu

:Manage_Menu
	set /p cmd=^<Enter command^>: 
	if /i %cmd%==act (start Bat\Activation_For_TR.bat & exit)
	pause