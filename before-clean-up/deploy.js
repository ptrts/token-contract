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
