// Достаем свершившуюся транзакцию создания контракта
var txInfo = eth.getTransactionReceipt(tokenTxHash);

if (txInfo) {

    // Вытаскиваем из нее адрес созданного контракта
    var tokenAddress = txInfo.contractAddress;

    if (tokenAddress) {
        console.log('var tokenAddress = \'' + tokenAddress + '\';\n');
    } else {
        console.log('// Ошибка. Контракт еще не создан, повторите попытку позднее');
    }
} else {
    console.log('// Ошибка. Транзакции еще нет, повторите попытку позднее');
}
