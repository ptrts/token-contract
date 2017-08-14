//var source = '<исходный код контрактов>';
//var solFile = '<полный путь к файлу с контрактами>';

var myRegexp = /(.*?)(\.([^.]+)?)?$/g;
var match = myRegexp.exec(solFile);

match.forEach(function(group, i) {
    console.log('group #' + i + ': ' + group);
});

var fileNameWithoutExtension = match[1];

var infoFileName = fileNameWithoutExtension + '-info.json';

// Компилируемся
var compileResult = eth.compile.solidity(source);

// Берем один из скомпилированных контрактов
var contract = compileResult.test;

// Отправляем транзакцию с его байткодом. В данном случае - без параметров
// Сохраняем хеш созданной транзакции
var txHash = eth.sendTransaction({from: primary, data: contract.code });

// Сохраняем адрес контракта, созданного нашей транзакцией
var contractAddress = eth.getTransactionReceipt(txHash);

// Из скомпилированного контракта, берем поле info, 
// и сохраняем его содержимое во временный файл. 
// В этом info лежит строка JSON с информацией о контракте
// Получаем хеш этого JSON
var contentHash = admin.saveInfo(contract.info, infoFileName);

// Регистрируем хеш содержимого, с привязкой к адресу нашего контракта
admin.register(primary, contractAddress, contentHash);

// Регистрируем URL к нашему файлу (за неимением опубликованного файла в интернете) 
// с привязкой к хешу содержимого информации о контракте
admin.registerUrl(primary, contentHash, "file://"+infoFileName);
