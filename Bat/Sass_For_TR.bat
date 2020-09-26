@echo off

echo.
echo.
call :Colors "Cyan" "Black" "'						Welcome to Sass Synchronization!						'"
cd css

:EnterSCSS
	echo.
	call :Colors "darkyellow" "black" "'  Choose .scss file and enter its name: '" 
	forfiles /m *.scss /c "cmd /c echo 		@file"
	set /p scss_file="<Enter name>: "
	echo.

	if not defined scss_file (call :Colors "DarkRed" "Black" "'  Ooops... Where is the name? Try again.'" & goto EnterSCSS)

	if %scss_file%==rel (goto Rel) 
	if %scss_file%==exit (exit)

:EnterCSS
	call :Colors "darkyellow" "black" "'  And now choose .css file for connecting and enter its name: '" 
	forfiles /m *.css /c "cmd /c echo 		@file"
	set /p css_file="<Enter name>: "

	if not defined css_file (call :Colors "DarkRed" "Black" "'  Ooops... Where is the name? Try again.'" & goto EnterCSS)
	if %css_file%==rel (goto Rel)
	if %css_file%==exit (exit)

	sass --watch %scss_file%.scss %css_file%.css

:Rel
	cd..
	set scss_file=
	set css_file=
	start Bat\Sass_For_TR.bat
	exit

:Colors
	powershell write-host -fore %1 -back %2 %3
	exit /b