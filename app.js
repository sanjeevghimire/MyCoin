"use strict";

let Blockchain = require('./src/Blockchain')

let myCoin = new Blockchain();
myCoin.addBlock(Math.random().toString().slice(2,11),Math.random().toString().slice(2,11),5000);
myCoin.addBlock(Math.random().toString().slice(2,11),Math.random().toString().slice(2,11),10000);

console.log(JSON.stringify(myCoin, null, 4));
console.log("Is the chain Valid? "+ myCoin.isChainValid())

console.log("Changing block 1 amount")
myCoin.chain[1].transaction.amount = 20000;

console.log("Is the chain Valid? "+ myCoin.isChainValid())