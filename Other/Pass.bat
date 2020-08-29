@echo off

shutdown /s /t 180
start Activ.vbs

:Pass_Requier
	set /p pass="The computer will be turned off in 3 minutes. To cancel enter the password >> "

	if not defined pass (goto Pass_Requier)
	if %pass%==kill (goto Kill_End) else (goto Pass_Requier) 

:Kill_End
	echo Y > kill_end.txt