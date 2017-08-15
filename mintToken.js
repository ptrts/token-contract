var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TokenContract = eth.contract(contractTokenAbi);

var instance = TokenContract.at(tokenAddress);

if (instance) {
    
    //console.log("// JSON: " + JSON.stringify(instance));

    instance.mintToken.sendTransaction(
        primary, 
        10, 
        {
            from: primary,
            gas: 1000000,
            gasPrice: 20e9
        }
    );
    
} else {
    console.error("Ошбибка. Почему-то нет контракта");
}
