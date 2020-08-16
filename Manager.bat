@echo off
echo ^<Command list^>: act ^| commit ^| restore

:Loop
	goto Manage_Menu

:Manage_Menu
	set /p cmd=^<Enter command^>: 
	if /i %cmd%==act (start Bat\Activation_For_TR.bat & goto Loop)
	if /i %cmd%==commit (start Bat\Commit_For_TR.bat & goto Loop)
	pause