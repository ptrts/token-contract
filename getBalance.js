var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TokenContract = eth.contract(contractTokenAbi);

var instance = TokenContract.at(tokenAddress);

if (instance) {
    
    var result = instance.getBalance.call(primary);
    
    console.log("result = " + result)
    
} else {
    console.error("Ошибка. Почему-то нет контракта");
}
