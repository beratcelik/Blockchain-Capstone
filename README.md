#How to Test
``npm install``
``cd eth-contracts``
`ganache-cli`

open a new terminal and go to `eth-contracts` direction

``truffle test ./test/TestERC721Mintable.js``

``truffle test ./test/TestSolnSquareVerifier.js``

``truffle test ./test/TestSquareVerifier.js``

##How to Test on Rinkeby

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

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


