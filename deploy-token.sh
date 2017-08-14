#!/bin/bash

solFile=./token-proxy-system.sol
variablesJsFile=./variables.js
deployTokenJsFile=./deploy-token.js
ipcFile=/home/ptaruts/tasks/technologies/etherium/geth/testnet/node3/data/geth.ipc

echo -E "// Файл для автоматического деплоя контрактов. Создан автоматически" > ${variablesJsFile}

# Выполняем компиляцию
solc \
-o build \
--overwrite \
--ast \
--ast-json \
--ast-compact-json \
--asm \
--asm-json \
--opcodes \
--bin \
--bin-runtime \
--clone-bin \
--abi \
--hashes \
--userdoc \
--devdoc \
--metadata \
${solFile}

processContract() {
    
    contractName=$1
    
    ############################
    # Добавляем код контракта
    ############################
    
    # кандидаты на данные контракта, которые надо высылать в транзакции создания контракта
    #       ${contractName}.bin
    #       ${contractName}.bin-runtime
    #       ${contractName}.clone_bin
    
    # Выбираем файл, в котором типа лежит скомпилированный код контракта
    contractCodeFile=./build/${contractName}.bin
    # Забираем его содержимое себе в переменную
    contractCode=`cat ${contractCodeFile}`
    # Добавляем в deploy-parameters.js такую же переменную с таким же содержимым 
    echo var contract${contractName}Code = \"0x${contractCode}\"\; >> ${variablesJsFile}
    
    ############################
    # Добавляем ABI
    ############################
    
    # Выбираем из какого файла забирать
    abiFile=./build/${contractName}.abi
    # Забираем содержимое себе в переменную
    abiJson=`cat ${abiFile}`
    # Добавляем в deploy-parameters.js такую же переменную с таким же содержимым 
    echo -E var contract${contractName}Abi = ${abiJson}\; >> ${variablesJsFile}
}

processContract Token
processContract Proxy

# launch geth
# attach to the node
# exec deployParametersJsFile
# exec deployJsFile
geth --exec "loadScript(\"${variablesJsFile}\"); loadScript(\"${deployTokenJsFile}\")" attach ${ipcFile} | grep -P 'var .*;$' >> ${variablesJsFile}
