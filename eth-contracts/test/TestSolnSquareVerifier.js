
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require("Verifier");
const {expectRevert} = require('@openzeppelin/test-helpers');
var Json = require("../../zokrates/code/square/proof.json");

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];

    const name = "customToken";
    const symbol = "CTN";
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";


    describe('description here', function () {
        beforeEach(async function f() {

            const verifier = await Verifier.new({from: accounts[0]});
            this.contract = await SolnSquareVerifier.new(verifier.address, name, symbol, {from: account_one});

        })
// Test if a new solution can be added for contract - SolnSquareVerifier
        it('A new solution should be added for contract', async function () {
            let status = false;
            try{
                await this.contract.addTheSolutions(Json.proof.a,Json.proof.b,Json.proof.c,Json.inputs,{from:accounts[1]}).then(function (res) {
                    //console.log(res);
                    status = true;
                })
            }catch (e) {
                status = false
            }

            assert.equal(status, true, "A new solution can not be added for contract - SolnSquareVerifier");

        });

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('An ERC721 token can be minted for contract', async function () {
            let status = false;
            try{
                await this.contract.mintNewNFT(9,1,accounts[1],{from:accounts[0]}).then(function (res) {
                    //console.log(res);
                    status = true;
                })
            }catch (e) {
                status = false
                //console.log(e);
            }

            assert.equal(status, true, "An ERC721 token can not be minted for contract - SolnSquareVerifier");

        });

    })


});