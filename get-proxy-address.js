// Достаем свершившуюся транзакцию создания контракта прокси
var txInfo = eth.getTransactionReceipt(proxyTxHash);

if (txInfo) {

    // Вытаскиваем из нее адрес созданного контракта прокси
    var proxyAddress = txInfo.contractAddress;

    if (proxyAddress) {
        console.log('var proxyAddress = \'' + proxyAddress + '\';\n');
    } else {
        console.log('// Ошибка. Контракт прокси еще не создан, повторите попытку позднее');
    }

} else {
    console.log('// Ошибка. Транзакции еще нет, повторите попытку позднее');
}
