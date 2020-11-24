const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(
  "early slim kingdom master coral push scout whisper cigar rebuild about stick", //account that interacts
  "https://rinkeby.infura.io/v3/bbffd1ae89ca4b9bbb827704d519a765" //rpc of the chain
);


const web3 = new Web3(provider);
const address = "0x4B8d7Cc2eA914A1075b521cC0be6775501f55824";
const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

var contract = new web3.eth.Contract(abi, address); //needed


async function App() {



    const accounts = await web3.eth.getAccounts();
    
  console.log(accounts);

        var tx = await contract.methods.set("Harry").send({
            from: accounts[0],
        });

    console.log(tx);
}

App();