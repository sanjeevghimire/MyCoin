"use strict";

const sha256 = require('crypto-js/sha256');

class Block {
	constructor(index, transaction, previousHash = '' ){
		this.index = index;
		this.timestamp = new Date();
		this.transaction = transaction;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	calculateHash(){		
		return sha256(JSON.stringify(this.transaction) + this.timestamp + this.index + this.previousHash).toString();
	}
}

module.exports = Block;