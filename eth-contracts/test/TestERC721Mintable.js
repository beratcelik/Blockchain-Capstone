var ERC721MintableComplete = artifacts.require('CustomERC721Token');
//var BigNumber = require('bignumber.js');
const {expectRevert} = require('@openzeppelin/test-helpers');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];

    const name = "customToken";
    const symbol = "CTN";
    const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            //this.contract = await ERC721MintableComplete.new({from: account_one});
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});

            // TODO: mint multiple tokens
                await this.contract.mint(accounts[2],2,{from:account_one});
                await this.contract.mint(accounts[3],3,{from:account_one});
                await this.contract.mint(accounts[4],4,{from:account_one});
                await this.contract.mint(accounts[4],40,{from:account_one});
                await this.contract.mint(accounts[5],5,{from:account_one});
            //    await this.contract.mint(accounts[6],6,{from:account_one});

        });

        // Extra tests - START

        it('name of the contract', async function f() {
            await this.contract.name({from:account_one}).then(function (res) {
                assert.equal(res,name, "Contract address didn't return");
            })
        })

        // Extra test - END

        it('should return total supply', async function () {
            let status = true;

            try {
                await this.contract.totalSupply({from: account_one}).then(
                    function (res) {
                        console.log("Total supply: "+Number(res));
                    });
            }catch (e){
                    status = false;
            }

            assert.equal(status, true, "didn't return total supply");
        });

        it('should get token balance', async function () {
            await this.contract.balanceOf(accounts[4]).then(
                function (res) {
                    console.log("Balance of account 4: " + Number(res));
                    assert.equal(Number(res), 2, "couldn't get token balance");
                });
        });

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            await this.contract.tokenURI(4).then(
                function (res) {
                    //console.log(res);
                    assert.equal(res, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/4', "couldn't get token URI");
                });
        })

        it('should transfer token from one owner to another', async function () {
            // console.log("owner: " + accounts[4]);
            // console.log("receiver: " + accounts[5]);
            await this.contract.transferFrom(accounts[4], accounts[5], 4, {from:accounts[4]}).then(
                function (res) {
                     // console.log(res);
                });
        })


    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new(name, symbol, {from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () {
            await expectRevert(this.contract.mint(accounts[2],20,{from:accounts[2]}),
                'You are not the contract owner -- Reason given: You are not the contract owner');
        })

        it('should return contract owner', async function () { 
            await this.contract._owner().then(
                function (res) {
                    assert.equal(account_one,res,"didn't return the contract owner")
            });
        })

    });

})

