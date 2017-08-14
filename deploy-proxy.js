var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

// Достаем свершившуюся транзакцию создания контракта токена
var txInfo = eth.getTransactionReceipt(tokenTxHash);

// Вытаскиваем из нее адрес созданного контракта токена
var tokenAddress = txInfo.contractAddress;

if (!tokenAddress) {
    throw "Контракт токена еще не создан, повторите попытку позднее";
}

console.log("var tokenAddress = '" + tokenAddress + "';\n");

// Делаем фабрику контрактов прокси
var ProxyContract = eth.contract(contractProxyAbi);

// Отправляем транзакцию создания контракта прокси
var contract = ProxyContract.new(
    tokenAddress,
    {
        from: primary,
        data: contractProxyCode,
        gas: 1000000,
        gasPrice: 20e9
    }
);

console.log("var proxyTxHash = '" + contract.transactionHash + "';\n");
