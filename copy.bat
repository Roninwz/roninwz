@echo off 
chcp 65001
xcopy C:\project\lerna-npm\packages\roninwz-ui\*.* C:\project\roninwz-ui\ /s /e /c /y /h /r
pause 
goto end 
