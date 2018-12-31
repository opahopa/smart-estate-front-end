import web3 from './web3';


// @ts-ignored
const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "keys",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x0cb6aaf1"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x8da5cb5b"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "numSpUnits",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x92e78d18"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": true,
                "name": "_geoHash",
                "type": "string"
            }
        ],
        "name": "SpatialUnitAdded",
        "type": "event",
        "signature": "0xb890dcc2a772dc78b85ba6dd9b339427389133db3b779771bb1c0f3586c6b92b"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_geoHash",
                "type": "string"
            }
        ],
        "name": "addSpatialUnit",
        "outputs": [
            {
                "name": "_newSpatialunit",
                "type": "address"
            },
            {
                "name": "_keyslength",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x434d7098"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "getSpatialUnit",
        "outputs": [
            {
                "name": "creator",
                "type": "address"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "geoHash",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x24dcee68"
    }
];

const address = '0x91b7d87157d54D30334Af8C16E3743C5fd33457E';


export default new web3.eth.Contract(abi, address);
