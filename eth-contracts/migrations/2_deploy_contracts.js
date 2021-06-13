// migrating the appropriate contracts
//var SquareVerifier = artifacts.require("./SquareVerifier.sol");
//var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

var SquareVerifier = artifacts.require("../../zokrates/code/square/verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
//var CustomERC721Token = artifacts.require("CustomERC721Token");


module.exports = async (deployer) => {
  await deployer.deploy(SquareVerifier);
  //await deployer.deploy(CustomERC721Token, "CustomToken", "CTN");
  console.log("SquareVerifier.address: " + SquareVerifier.address);
  await deployer.deploy(SolnSquareVerifier, SquareVerifier.address, "customToken", "CTN");
};
