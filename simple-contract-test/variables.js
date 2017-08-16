// Файл для автоматического деплоя контрактов. Создан автоматически
var contractTestCode = "0x60606040526040805190810160405280600981526020017f546f6b656e20302e3100000000000000000000000000000000000000000000008152506004908051906020019061004f929190610165565b50341561005b57600080fd5b604051610ab8380380610ab8833981016040528080519060200190919080518201919060200180519060200190919080518201919060200180519060200190919080519060200190919050505b60006001819055506000808190555085600960003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550856008819055508460059080519060200190610118929190610165565b50826006908051906020019061012f929190610165565b5083600760006101000a81548160ff021916908360ff16021790555081600381905550806002819055505b50505050505061020a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101a657805160ff19168380011785556101d4565b828001600101855582156101d4579182015b828111156101d35782518255916020019190600101906101b8565b5b5090506101e191906101e5565b5090565b61020791905b808211156102035760008160009055506001016101eb565b5090565b90565b61089f806102196000396000f300606060405236156100d9576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e857806317d7de7c1461017757806318160ddd14610206578063313ce5671461022f5780634b7503341461025e5780635a3b7e421461028757806360fe47b1146103165780636d4ce63c1461033957806370a08231146103625780638620410b146103af5780638af5de72146103d857806395d89b4114610401578063a87d942c14610490578063dd62ed3e146104b9578063fd99a74614610525575b5b60018054016001819055505b005b34156100f357600080fd5b6100fb61054e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013c5780820151818401525b602081019050610120565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561018257600080fd5b61018a6105ec565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cb5780820151818401525b6020810190506101af565b50505050905090810190601f1680156101f85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021157600080fd5b610219610695565b6040518082815260200191505060405180910390f35b341561023a57600080fd5b61024261069b565b604051808260ff1660ff16815260200191505060405180910390f35b341561026957600080fd5b6102716106ae565b6040518082815260200191505060405180910390f35b341561029257600080fd5b61029a6106b4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102db5780820151818401525b6020810190506102bf565b50505050905090810190601f1680156103085780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561032157600080fd5b6103376004808035906020019091905050610752565b005b341561034457600080fd5b61034c61075d565b6040518082815260200191505060405180910390f35b341561036d57600080fd5b610399600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610767565b6040518082815260200191505060405180910390f35b34156103ba57600080fd5b6103c261077f565b6040518082815260200191505060405180910390f35b34156103e357600080fd5b6103eb610785565b6040518082815260200191505060405180910390f35b341561040c57600080fd5b61041461078b565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104555780820151818401525b602081019050610439565b50505050905090810190601f1680156104825780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049b57600080fd5b6104a3610829565b6040518082815260200191505060405180910390f35b34156104c457600080fd5b61050f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610834565b6040518082815260200191505060405180910390f35b341561053057600080fd5b610538610859565b6040518082815260200191505060405180910390f35b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105e45780601f106105b9576101008083540402835291602001916105e4565b820191906000526020600020905b8154815290600101906020018083116105c757829003601f168201915b505050505081565b6105f461085f565b60058054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561068a5780601f1061065f5761010080835404028352916020019161068a565b820191906000526020600020905b81548152906001019060200180831161066d57829003601f168201915b505050505090505b90565b60085481565b600760009054906101000a900460ff1681565b60025481565b60048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074a5780601f1061071f5761010080835404028352916020019161074a565b820191906000526020600020905b81548152906001019060200180831161072d57829003601f168201915b505050505081565b806000819055505b50565b6000805490505b90565b60096020528060005260406000206000915090505481565b60035481565b60005481565b60068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108215780601f106107f657610100808354040283529160200191610821565b820191906000526020600020905b81548152906001019060200180831161080457829003601f168201915b505050505081565b600060015490505b90565b600a602052816000526040600020602052806000526040600020600091509150505481565b60015481565b6020604051908101604052806000815250905600a165627a7a723058201f31a274a79843bc10848ac894da2dd256ab8033eef4b620979012353a6cd3a00029";
var contractTestAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getName","outputs":[{"name":"_name","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"get","outputs":[{"name":"_value","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"testValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"transactionsCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"decimalUnits","type":"uint8"},{"name":"tokenSymbol","type":"string"},{"name":"_buyPrice","type":"uint256"},{"name":"_sellPrice","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}];
var testTxHash = '0x9d6a9976aa044e0f23bc11eac76f7dd71cbb195594c39814fec192fb2eff0bf3';
var testAddress = '0x29b6253a68981e574d5cc936911d5ff2b3a01527';