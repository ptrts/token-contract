var primary = eth.accounts[0];

personal.unlockAccount(primary, "12345", 3600000);

eth.sendTransaction({
    from: primary,
    to: testAddress,
    gas: 1000000,
    gasPrice: 20e9,
    value: 0.01e18
});
