// This file holds contracts ABI, Address and Default Gas for contract execution.

var ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "checkScore",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numChosen",
				"type": "uint256"
			}
		],
		"name": "revealState",
		"outputs": [
			{
				"name": "status",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "state",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "numHash",
				"type": "bytes32"
			},
			{
				"name": "userAnswer",
				"type": "uint256"
			}
		],
		"name": "commitmentStage",
		"outputs": [
			{
				"name": "status",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "text",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "ans",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "getPoints",
				"type": "string"
			}
		],
		"name": "ansByUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "text",
				"type": "string"
			}
		],
		"name": "msgUser",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "text",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "ans",
				"type": "int256"
			},
			{
				"indexed": false,
				"name": "points",
				"type": "string"
			}
		],
		"name": "points",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "message",
				"type": "string"
			}
		],
		"name": "error",
		"type": "event"
	}
]

var contractAddress = '0xb88022D0A60839795FDA432132c1e721D026C2FF';


var suppliedGas = 3000000;
