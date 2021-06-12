// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var Verifier = artifacts.require("Verifier");
// Test verification with correct proof
// - use the contents from proof.json generated from zokrates steps
var Json = require("../../zokrates/code/square/proof.json");
    


contract('TestSquareVerifier', accounts => {
    describe('Test verification with and without correct proof', function () {
        beforeEach(async function f() {
            this.contract = await Verifier.new({from: accounts[0]});
        })

        it("Test verification with correct proof", async function () {
            await this.contract.verifyTx.call(Json.proof.a,Json.proof.b,Json.proof.c,Json.inputs).then(function (res) {
                assert.equal(res, true, "Test verification with correct proof is not completed");
            })

        });

        // Test verification with incorrect proof
        it("Test verification with incorrect proof", async function () {
            await this.contract.verifyTx.call(Json.proof.c,Json.proof.b,Json.proof.c,Json.inputs).then(function (res) {
                assert.equal(res, false, "Test verification with incorrect proof is not completed");
            })

        });


    });
});