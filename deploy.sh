#!/bin/bash

solFile=./token-proxy-system.sol
contractName=TokenContract
deployParametersJsFile=./deploy-parameters.js
deployJsFile=./deploy.js
ipcFile=/home/ptaruts/tasks/technologies/etherium/geth/testnet/node3/data/geth.ipc

echo -E "// Файл для автоматического деплоя контрактов. Создан автоматически" > ${deployParametersJsFile}

#--combined-json abi,asm,ast,bin,bin-runtime,clone-bin,compact-format,devdoc,hashes,interface,metadata,opcodes,srcmap,srcmap-runtime,userdoc \

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
--formal \
${solFile}

# кандидаты на данные контракта, которые надо высылать в транзакции создания контракта
#       ${contractName}.bin
#       ${contractName}.bin-runtime
#       ${contractName}.clone_bin
# Выбираем файл, в котором типа лежит скомпилированный код контракта
contractCodeFile=./build/${contractName}.bin
# Забираем его содержимое себе в переменную
contractCode=`cat ${contractCodeFile}`
# Добавляем в deploy-parameters.js такую же переменную с таким же содержимым 
echo var contractCode = \"0x${contractCode}\"\; >> ${deployParametersJsFile}

# кандидаты на JSON с информацией по контракту
#       ${contractName}_evm.json
#       ${contractName}_meta.json
# Выбираем файл, в котором типа лежит информация по контракту
contractInfoFile=./build/${contractName}_meta.json
# Забираем его содержимое себе в переменную
contractInfo=`cat ${contractInfoFile}`
# Делаем из содержимого этого файла, строковый литерал с таким же содержимым 
contractInfo=`jshon -s "${contractInfo}"`
# Добавляем в deploy-parameters.js такую же переменную с таким же содержимым 
echo -E var contractInfo = "${contractInfo}"";" >> ${deployParametersJsFile}

# Создаем переменную с полным путем к файлу с информацией о контракте
contractInfoFileFullPath=`readlink -f ${contractInfoFile}`
echo var contractInfoFile = \"${contractInfoFileFullPath}\"\; >> ${deployParametersJsFile}

# Добавляем ABI
# Выбираем из какого файла забирать
abiFile=./build/${contractName}.abi
# Забираем содержимое себе в переменную
abiJson=`cat ${abiFile}`
# Добавляем в deploy-parameters.js такую же переменную с таким же содержимым 
echo -E var abi = ${abiJson}\; >> ${deployParametersJsFile}

# create "solFile" variable in the deployParametersJsFile
solFileFullPath=`readlink -f ${solFile}`
echo var solFile = \"${solFileFullPath}\"\; >> ${deployParametersJsFile}

# create "contractName" variable in the deployParametersJsFile
echo var contractName = \"${contractName}\"\; >> ${deployParametersJsFile}

# launch geth
# attach to the node
# exec deployParametersJsFile
# exec deployJsFile
geth --exec "loadScript(\"${deployParametersJsFile}\"); loadScript(\"${deployJsFile}\")" attach ${ipcFile}
