#!/bin/bash

solFile=./token-proxy-system.sol
contractName=TokenContract
sourceJsFile=./source.js
deployJsFile=./deploy.js
ipcFile=/home/ptaruts/tasks/technologies/etherium/geth/testnet/node3/data/geth.ipc

# create "source" variable in the sourceJsFile
source=`cat ${solFile}`
source=`jshon -s "${source}"`
echo -E var source = "${source}"";" > ${sourceJsFile}

# create "solFile" variable in the sourceJsFile
solFileFullPath=`readlink -f ${solFile}`
echo var solFileFullPath = \"${solFileFullPath}\"\; >> ${sourceJsFile}

# create "contractName" variable in the sourceJsFile
echo var contractName = \"${contractName}\"\; >> ${sourceJsFile}

# launch geth
# attach to the node
# exec sourceJsFile
# exec deployJsFile
geth --exec "loadScript(\"${sourceJsFile}\"); loadScript(\"${deployJsFile}\")" attach ${ipcFile}
