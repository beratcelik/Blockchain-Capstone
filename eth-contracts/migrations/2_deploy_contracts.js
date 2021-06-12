// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

var SquareVerifier = artifacts.require("../../zokrates/code/square/verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
//var ERC721Mintable = artifacts.require("CustomERC721Token");


module.exports = async (deployer) => {
  await deployer.deploy(SquareVerifier);
  //await deployer.deploy(ERC721Mintable, "CustomToken", "cToken");
  await deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "CustomToken", "cToken");
};
