var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

// Достаем свершившуюся транзакцию создания контракта прокси
var txInfo = eth.getTransactionReceipt(proxyTxHash);

// Вытаскиваем из нее адрес созданного контракта прокси
var proxyAddress = txInfo.contractAddress;

if (!proxyAddress) {
    throw "Контракт прокси еще не создан, повторите попытку позднее";
}

console.log("var proxyAddress = '" + proxyAddress + "';\n");
