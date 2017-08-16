var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TestContract = eth.contract(contractTestAbi);

var instance = TestContract.at(testAddress);

if (instance) {
    
    var result = instance.get.call();
    
    console.log("result = " + result)
    
} else {
    console.error("Ошибка. Почему-то нет контракта");
}
