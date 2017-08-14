#!/bin/bash

variablesJsFile=./variables.js
deployProxyJsFile=./deploy-proxy.js
ipcFile=/home/ptaruts/tasks/technologies/etherium/geth/testnet/node3/data/geth.ipc

geth --exec "loadScript(\"${variablesJsFile}\"); loadScript(\"${deployProxyJsFile}\")" attach ${ipcFile} | grep -P 'var .*;$' >> ${variablesJsFile}
