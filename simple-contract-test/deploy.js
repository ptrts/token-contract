var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

var TokenContract = eth.contract(contractTestAbi);

/*var contract = TestContract.new(
    {
        from: primary,
        data: contractTestCode,
        gas: 1000000,
        gasPrice: 20e9
    }
);*/

var initialSupply = 100;
var tokenName     = "t10";
var decimalUnits  = 0;
var tokenSymbol   = "t10";
var buyPrice     = 0.002e18;
var sellPrice    = 0.001e18;

var contract = TestContract.new(
    initialSupply,
    tokenName,
    decimalUnits,
    tokenSymbol,
    buyPrice,
    sellPrice,
    {
        from: primary,
        data: contractTestCode,
        gas: 1e6,
        gasPrice: 20e9
    }
);








console.log("var testTxHash = '" + contract.transactionHash + "';\n");
