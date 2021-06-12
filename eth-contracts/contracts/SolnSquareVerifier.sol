pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import "../../zokrates/code/square/verifier.sol";
import 'openzeppelin-solidity/contracts/drafts/Counters.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is CustomERC721Token {

    Verifier public squareVerifier;

    using Address for address;
    using Counters for Counters.Counter;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution{
        uint256 _index;
        address _address;
        bool _minted;
    }

    // TODO define an array of the above struct
    mapping(bytes32=>Solution) private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32=>Counters.Counter) private countSolution;

    // TODO Create an event to emit when a solution is added
    event solutionIsAdded(uint256 countSolution, address indexed _address);
/*
    constructor(address _address, string memory _name, string memory _symbol)
        CustomERC721Token(_name, _symbol)
            public
            {
                //squareVerifier = Verifier(_address);
            }
*/
    // TODO Create a function to add the solutions to the array and emit the event
    function addTheSolutions (
            uint256[2] memory a,
            uint256[2][2] memory b,
            uint256[2] memory c,
            uint256[2] memory input

    ) public{

            bytes32 sHash = keccak256(abi.encodePacked(input[0], input[1]));
            require(solutions[sHash]._address == address(0), "Solution exists already");

            bool verified = squareVerifier.verifyTx(a,b,c,input);
            require(verified, "Solution is not be verified");

            solutions[sHash] = Solution(countSolution[sHash].current(), msg.sender, false);

            emit solutionIsAdded(countSolution[sHash].current(), msg.sender);
            countSolution[sHash].increment;
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mintNewNFT(uint256 a, uint256 b, address toAddress) public{

        bytes32 sHash = keccak256(abi.encodePacked(a, b));
        require(solutions[sHash]._minted == false, "make sure the solution is unique (has not been used before.");
        //require(solutions[sHash]._address == msg.sender, "You are not the owner.");

        super.mint(toAddress, solutions[sHash]._index);
        solutions[sHash]._minted = true;

    }

}