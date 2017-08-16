#!/bin/bash

variablesJsFile=./variables.js
mainJsFile=./get.js
ipcFile=/home/ptaruts/tasks/technologies/etherium/geth/testnet/node3/data/geth.ipc

geth --exec "loadScript(\"${variablesJsFile}\"); loadScript(\"${mainJsFile}\")" attach ${ipcFile}
