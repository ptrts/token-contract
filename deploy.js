var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TokenContract = eth.contract(abi);

var initialSupply = 100;
var tokenName     = "t10";
var decimalUnits  = 0;
var tokenSymbol   = "t10";
var buyPrice     = 0.002e18;
var sellPrice    = 0.001e18;

var contract = TokenContract.new(
    initialSupply,
    tokenName,
    decimalUnits,
    tokenSymbol,
    buyPrice,
    sellPrice,
    {
        from: primary,
        data: contractCode,
        gas: 1000000,
        gasPrice: 20e9
    }
);

var txHash = contract.transactionHash;

console.log("txHash = " + txHash);


















// console.log(JSON.stringify(contract, null, '\t'));

/*

var myRegexp = /(.*?)(\.([^.]+)?)?$/g;
var match = myRegexp.exec(solFile);

match.forEach(function(group, i) {
    console.log('group #' + i + ': ' + group);
});

var fileNameWithoutExtension = match[1];

var contractInfoFileName = fileNameWithoutExtension + '-' + contractName + '-info.json';

// Хеширование происходит по такому алгоритму:
//      Keccak-256 SHA3
var contentHash = web3.sha3(contractInfo);

console.log('contentHash = ' + contentHash);

// Регистрируем хеш содержимого, с привязкой к адресу нашего контракта
admin.register(primary, contractAddress, contentHash);

// Регистрируем URL к нашему файлу (за неимением опубликованного файла в интернете) 
// с привязкой к хешу содержимого информации о контракте
admin.registerUrl(primary, contentHash, "file://"+contractInfoFileName);

*/
