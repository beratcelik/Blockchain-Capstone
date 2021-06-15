/*
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4f387b22b6e44a7196fcd1e87f70fd6c";
const fs = require('fs');
const MNEMONIC = fs.readFileSync("../eth-contracts/mnemonic.secret").toString().trim();
const NODE_API_KEY = infuraKey;
const OWNER_ADDRESS = "0x28F3Fec4f1d06D829dae29844874E417768750C1";
const NETWORK="rinkeby";
const FACTORY_CONTRACT_ADDRESS = OWNER_ADDRESS;
const NFT_CONTRACT_ADDRESS = "0xfD615F25De1F682c7De120484608B47834B30b5F";

 */

/**
 * This file was based on OpenSea Tutorial:
 * https://docs.opensea.io/docs/1-structuring-your-smart-contract
 * https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js
 */
const HDWalletProvider = require("truffle-hdwallet-provider");
const zokratesProof = [
    require("./proof_2_4.json"),
    require("./proof_3_9.json"),
    require("./proof_4_16.json"),
    require("./proof_5_25.json"),
    require("./proof_6_36.json"),
    require("./proof_7_49.json"),
    require("./proof_8_64.json"),
    require("./proof_9_81.json"),
    require("./proof_10_100.json"),
    require("./proof_11_121.json"),
    require("./proof_12_144.json")
];

const web3 = require('web3')
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const NETWORK = process.env.NETWORK
const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY

console.log(CONTRACT_ADDRESS);

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}
const contract = require('../eth-contracts/build_/contracts/SolnSquareVerifier.json');
const ABI = contract.abi;
async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )
    if (CONTRACT_ADDRESS) {
        const r2token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "4500000" })
        for (let i = 1; i < zokratesProof.length ; i++) {
            try {
                const proofs = Object.values(zokratesProof[i].proof);
                const inputs = zokratesProof[i].inputs;
                console.log("OWNER_ADDRESS "+ OWNER_ADDRESS + "\n");
                console.log("i "+i+ "\n");
                console.log("proofs "+ proofs+ "\n");
                console.log("inputs "+ inputs+ "\n");
                let tx2 = await r2token.methods.mintToken(OWNER_ADDRESS, i, ...proofs, inputs).send({ from: OWNER_ADDRESS });
                console.log("Minted item. Transaction: " + tx2.transactionHash);
            } catch (e) {
                console.log(e);
            }
        }
    }
}
main()




/*
//const HDWalletProvider = require('truffle-hdwallet-provider');
const web3 = require("web3");
//const MNEMONIC = process.env.MNEMONIC;
//const NODE_API_KEY = process.env.INFURA_KEY || process.env.ALCHEMY_KEY;
const isInfura = !!process.env.INFURA_KEY;
// const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS;
//const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
//const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
//const NETWORK = process.env.NETWORK;
const NUM_CREATURES = 12;
const NUM_LOOTBOXES = 4;
const DEFAULT_OPTION_ID = 0;
const LOOTBOX_OPTION_ID = 2;

if (!MNEMONIC || !NODE_API_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error(
        "Please set a mnemonic, Alchemy/Infura key, owner, network, and contract address."
    );
    return;
}

const NFT_ABI = [
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address",
            },
        ],
        name: "mintTo",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

const FACTORY_ABI = [
    {
        constant: false,
        inputs: [
            {
                name: "_optionId",
                type: "uint256",
            },
            {
                name: "_toAddress",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

async function main() {
    const network =
        NETWORK === "mainnet" || NETWORK === "live" ? "mainnet" : "rinkeby";
    const provider = new HDWalletProvider(
        MNEMONIC,
        isInfura
            ? "https://" + network + ".infura.io/v3/" + NODE_API_KEY
            : "https://eth-" + network + ".alchemyapi.io/v2/" + NODE_API_KEY
    );
    const web3Instance = new web3(provider);

    if (FACTORY_CONTRACT_ADDRESS) {
        const factoryContract = new web3Instance.eth.Contract(
            FACTORY_ABI,
            FACTORY_CONTRACT_ADDRESS,
            { gasLimit: "1000000" }
        );

        // Creatures issued directly to the owner.
        for (var i = 0; i < NUM_CREATURES; i++) {
            const result = await factoryContract.methods
                .mint(DEFAULT_OPTION_ID, OWNER_ADDRESS)
                .send({ from: OWNER_ADDRESS });
            console.log("Minted creature. Transaction: " + result.transactionHash);
        }

        // Lootboxes issued directly to the owner.
        for (var i = 0; i < NUM_LOOTBOXES; i++) {
            const result = await factoryContract.methods
                .mint(LOOTBOX_OPTION_ID, OWNER_ADDRESS)
                .send({ from: OWNER_ADDRESS });
            console.log("Minted lootbox. Transaction: " + result.transactionHash);
        }
    } else if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(
            NFT_ABI,
            NFT_CONTRACT_ADDRESS,
            { gasLimit: "1000000" }
        );

        // Creatures issued directly to the owner.
        for (var i = 0; i < NUM_CREATURES; i++) {
            const result = await nftContract.methods
                .mintTo(OWNER_ADDRESS)
                .send({ from: OWNER_ADDRESS });
            console.log("Minted creature. Transaction: " + result.transactionHash);
        }
    } else {
        console.error(
            "Add NFT_CONTRACT_ADDRESS or FACTORY_CONTRACT_ADDRESS to the environment variables"
        );
    }
}

main();


 */