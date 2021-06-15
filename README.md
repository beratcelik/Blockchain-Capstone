

###Contract Addresses

`0x87d9BF0F19C36c154c65F244654D6DF569107B49`

###OpenSea MarketPlace Storefront link's

`https://testnets.opensea.io/collection/customtoken-4nwxf8rlt4`


### ABI

` [
{
"inputs": [
{
"internalType": "address",
"name": "_address",
"type": "address"
},
{
"internalType": "string",
"name": "_name",
"type": "string"
},
{
"internalType": "string",
"name": "_symbol",
"type": "string"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"indexed": true,
"internalType": "address",
"name": "approved",
"type": "address"
},
{
"indexed": true,
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "Approval",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"indexed": true,
"internalType": "address",
"name": "operator",
"type": "address"
},
{
"indexed": false,
"internalType": "bool",
"name": "approved",
"type": "bool"
}
],
"name": "ApprovalForAll",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"internalType": "address",
"name": "from",
"type": "address"
},
{
"indexed": true,
"internalType": "address",
"name": "to",
"type": "address"
},
{
"indexed": true,
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "Transfer",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "uint256",
"name": "countSolution",
"type": "uint256"
},
{
"indexed": true,
"internalType": "address",
"name": "_address",
"type": "address"
}
],
"name": "solutionIsAdded",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "address",
"name": "_owner",
"type": "address"
}
],
"name": "transferOwnershipInfo",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"internalType": "address",
"name": "_address",
"type": "address"
}
],
"name": "whoTriggeredSetPausable",
"type": "event"
},
{
"constant": false,
"inputs": [
{
"internalType": "bytes32",
"name": "_myid",
"type": "bytes32"
},
{
"internalType": "string",
"name": "_result",
"type": "string"
}
],
"name": "__callback",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "bytes32",
"name": "_myid",
"type": "bytes32"
},
{
"internalType": "string",
"name": "_result",
"type": "string"
},
{
"internalType": "bytes",
"name": "_proof",
"type": "bytes"
}
],
"name": "__callback",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "_owner",
"outputs": [
{
"internalType": "address",
"name": "",
"type": "address"
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
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "approve",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "address",
"name": "owner",
"type": "address"
}
],
"name": "balanceOf",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "baseTokenURI",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "getApproved",
"outputs": [
{
"internalType": "address",
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"internalType": "address",
"name": "operator",
"type": "address"
}
],
"name": "isApprovedForAll",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
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
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "mint",
"outputs": [
{
"internalType": "bool",
"name": "",
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
"name": "name",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "ownerOf",
"outputs": [
{
"internalType": "address",
"name": "",
"type": "address"
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
"internalType": "address",
"name": "from",
"type": "address"
},
{
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "safeTransferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "address",
"name": "from",
"type": "address"
},
{
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
},
{
"internalType": "bytes",
"name": "_data",
"type": "bytes"
}
],
"name": "safeTransferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "bool",
"name": "approved",
"type": "bool"
}
],
"name": "setApprovalForAll",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "bool",
"name": "_status",
"type": "bool"
}
],
"name": "setPausable",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "squareVerifier",
"outputs": [
{
"internalType": "contract Verifier",
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "bytes4",
"name": "interfaceId",
"type": "bytes4"
}
],
"name": "supportsInterface",
"outputs": [
{
"internalType": "bool",
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "symbol",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "uint256",
"name": "index",
"type": "uint256"
}
],
"name": "tokenByIndex",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "address",
"name": "owner",
"type": "address"
},
{
"internalType": "uint256",
"name": "index",
"type": "uint256"
}
],
"name": "tokenOfOwnerByIndex",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "tokenURI",
"outputs": [
{
"internalType": "string",
"name": "",
"type": "string"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "totalSupply",
"outputs": [
{
"internalType": "uint256",
"name": "",
"type": "uint256"
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
"internalType": "address",
"name": "from",
"type": "address"
},
{
"internalType": "address",
"name": "to",
"type": "address"
},
{
"internalType": "uint256",
"name": "tokenId",
"type": "uint256"
}
],
"name": "transferFrom",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "address",
"name": "newOwner",
"type": "address"
}
],
"name": "transferOwnership",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "uint256[2]",
"name": "a",
"type": "uint256[2]"
},
{
"internalType": "uint256[2][2]",
"name": "b",
"type": "uint256[2][2]"
},
{
"internalType": "uint256[2]",
"name": "c",
"type": "uint256[2]"
},
{
"internalType": "uint256[2]",
"name": "input",
"type": "uint256[2]"
}
],
"name": "addTheSolutions",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"internalType": "uint256",
"name": "a",
"type": "uint256"
},
{
"internalType": "uint256",
"name": "b",
"type": "uint256"
},
{
"internalType": "address",
"name": "toAddress",
"type": "address"
}
],
"name": "mintNewNFT",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
}
]`


#How to Test
``npm install``
``cd eth-contracts``
`ganache-cli`

open a new terminal and go to `eth-contracts` direction

``truffle test ./test/TestERC721Mintable.js``

``truffle test ./test/TestSolnSquareVerifier.js``

``truffle test ./test/TestSquareVerifier.js``

###How to Test on Rinkeby

`truffle migrate --reset --network rinkeby`

###How to create `verifier.sol` using ZoKrates

`docker run -v /Users/iberat/PhpstormProjects/RealEstateMarketplace/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

`cd code/square/code`

`zokrates compile -i square.code`

`zokrates setup`

`zokrates compute-witness -a 3 9`

`zokrates generate-proof`

`zokrates export-verifier`

You should see `verifier.sol` generated. Import to use it in `SolnSquareVerifier.sol`

`import "../../zokrates/code/square/verifier.sol";`




# Write Up
Student provides Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's.




# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources#

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


