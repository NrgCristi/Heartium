@echo off
if not exist node_modules (call npm i)
title Heartium
node app.js
cmd /k
