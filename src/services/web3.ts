import Web3 from 'web3';



let web3: Web3;

// let web3: Web3;
// // @ts-ignore
// if (typeof window.web3 !== 'undefined') {
//     // @ts-ignore
//     web3 = new Web3(window.web3.currentProvider);
// } else {
//     alert("Please install Mist/Metamask to use this app");
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }

// @ts-ignore
if (typeof window.web3 !== 'undefined') {
    // @ts-ignore
    web3 = new Web3(window.web3.currentProvider)
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/d0b91d601254474cbdc9f60973930c1e'))
}

export default web3;