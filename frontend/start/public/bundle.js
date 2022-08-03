var contractABI = [
  {
    constant: true,
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];
var contractAddress = "0x918c8a467A68f309189c7A6EF05BEdcD5c96b330";

var web3 = new Web3("http://localhost:9545");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventHandler("DOMContentLoaded", () => {
  helloWorld.methods
    .hello()
    .call()
    .then((result) => {
      document.getElementById("hello").innerHTML = result;
    });
});
