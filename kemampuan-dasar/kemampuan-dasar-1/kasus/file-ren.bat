@echo off
ECHO fire-ren.java ada?
ECHO Enter Y for yes
ECHO Enter N for no
CHOICE /c YN /m "Yes or No"
:: To rename x.php to y.php
REN C:\x.php C:\y.php
pause