@echo off
title Command Manager

call :Colors "Cyan" "black" "Welcome to Command Manager!"
echo.

echo ^<Command list^>: act ^| push ^| restore ^| reload ^| exit
echo.

:Loop
	goto Manage_Menu

:Manage_Menu
	set cmd=
	set /p cmd=^<Enter command^>
	if not defined cmd goto Manage_Menu
	if /i %cmd%==act (start Bat\Activation_For_TR.bat & goto Manage_Menu)
	if /i %cmd%==push (start Bat\Push_For_TR.bat & goto Manage_Menu)
	if /i %cmd%==restore (goto Restore)
	if /i %cmd%==exit (exit)
	if /i %cmd%==reload (start Manager.bat & exit)
	call :Colors "red" "black" "'///***   %cmd% is undefined command!   ***///'"
	goto Manage_Menu

:Colors
	powershell write-host -fore %1 -back %2 %3
	exit /b

:Agreement
	set agreement=You trying to %reply%
	pause
	call :Colors "black" "darkyellow" "%agreement%"
::	if /i %agree%==Y (exit/b) else (if /i %agree%==N (goto Manage_Menu) else (echo "qq" & pause))

:Restore
	set reply=%cmd%. All of changes will be deleted.
	::. All of the changes you made will be deleted.
	call :Agreement
	pause
	goto Manage_Menu