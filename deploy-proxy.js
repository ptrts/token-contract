var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

// Делаем фабрику контрактов прокси
var ProxyContract = eth.contract(contractProxyAbi);

// Отправляем транзакцию создания контракта прокси
var contract = ProxyContract.new(
    tokenAddress,
    {
        from: primary,
        data: contractProxyCode,
        gas: 1e10,
        gasPrice: 20e9
    }
);

console.log("var proxyTxHash = '" + contract.transactionHash + "';\n");
