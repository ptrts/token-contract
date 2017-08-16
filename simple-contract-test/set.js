var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TestContract = eth.contract(contractTestAbi);

var instance = TestContract.at(testAddress);

if (instance) {
    
    //console.log("// JSON: " + JSON.stringify(instance));

    instance.set.sendTransaction(
        42, 
        {
            from: primary,
            gas: 1000000,
            gasPrice: 20e9
        }
    );
    
} else {
    console.error("Ошбибка. Почему-то нет контракта");
}
