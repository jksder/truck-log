const express = require("express"); //not default
const cors = require("cors"); //not default

const app = express();
const port = process.env.PORT || 5000;

const crypto = require("crypto");

//MIDDLEWARES
require("dotenv").config();

//for parsing sent forms
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); //for parsing multipart form data
//so that requests can be sent to this server from external sources (More specifically, data sent by this server can be USED by external sources like in an HTML page)
app.use(cors());

const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(
  process.env.ETH_PRIVKEY, //account that interacts
  process.env.ETH_RINKLINK //rpc of the chain
);

const web3 = new Web3(provider);
const address = "0x9E5633edC68B7BD51ccB058D86ac92eff29319a1";
const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "pkey",
        type: "string",
      },
      {
        internalType: "string",
        name: "e_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "e_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "e_date",
        type: "string",
      },
      {
        internalType: "int256",
        name: "e_fuel",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "e_odometer",
        type: "int256",
      },
    ],
    name: "addLog",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getLogs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "index",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "date",
            type: "string",
          },
          {
            internalType: "int256",
            name: "fuel",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "odometer",
            type: "int256",
          },
        ],
        internalType: "struct MyContract.Log[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

var contract = new web3.eth.Contract(abi, address); //needed

//POST,GET REQUESTS

app.get("/get-logs", async (req, res) => {
  try {
    var tx = await contract.methods.getLogs().call();

    res.json(tx);
  } catch (err) {
    res.json(err);
  }
});

app.post("/enter-log", async (req, res) => {
  const accounts = await web3.eth.getAccounts();

  const secret = "ieorpsnbqb";

  const {
    name: name,
    email: email,
    date: date,
    fuel: fuel,
    odometer: odometer,
  } = req.body.entry;


  const hash = crypto.createHmac("sha256", secret).update(name).digest("hex");

  try {
    var tx = await contract.methods.addLog(hash,name,email,date,fuel,odometer).send({
      from: accounts[0],
    });

    res.json(tx);
  } catch (err) {
    res.json(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
