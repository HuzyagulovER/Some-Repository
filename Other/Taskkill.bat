@echo on
tasklist | find "cmd" > temp.txt

for /f "delims=" %%i in ('find "cmd" temp.txt') do set taskkill_bat=%%i

set taskkill_bat=%taskkill_bat:~29,5%
set taskkill_bat=%taskkill_bat: =%

:Task_Killer
	tasklist | find "cmd" > temp.txt

	set /p command=<C:\Users\User\Desktop\EduarD\kill_end.txt >nul
	if defined command (goto Kill_Self)

	for /f "delims=" %%i in ('find "cmd" temp.txt') do set pid=%%i

	set pid=%pid:~29,5%
	set pid=%pid: =%

	if %pid%==%taskkill_bat% (goto Task_Killer)

	taskkill /pid %pid%
	goto Task_Killer

:Kill_Self
	shutdown /a
	del C:\Users\User\Desktop\EduarD\kill_end.txt
	exit