// Достаем свершившуюся транзакцию создания контракта
var txInfo = eth.getTransactionReceipt(testTxHash);

if (txInfo) {

    // Вытаскиваем из нее адрес созданного контракта
    var testAddress = txInfo.contractAddress;

    if (testAddress) {
        console.log('var testAddress = \'' + testAddress + '\';\n');
    } else {
        console.log('// Ошибка. Контракт еще не создан, повторите попытку позднее');
    }
} else {
    console.log('// Ошибка. Транзакции еще нет, повторите попытку позднее');
}
