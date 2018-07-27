"use strict";

const Block = require('./Block')

class Blockchain {

	constructor() {
		this.chain = [this.createGenesisBlock()]
	}

	createGenesisBlock() {
		return new Block(0, '{Genesis Block}', 0);
	}

	addBlock(sender, recipient, amount) {		
		const block = new Block(
			this.chain.length,
			this.newTransaction(sender, recipient, amount),
			this.lastBlock().hash
		);		
		this.chain.push(block);
	}

	lastBlock() {		
		return this.chain.slice(-1)[0]
	}

	newTransaction(sender, recipient, amount) {
		return {
			sender: sender,
			recipient: recipient,
			amount: amount
		};
	}

	isChainValid() {
		let isValid = true;		
		this.chain.forEach((block, index) => {

			if (index == 0) return;

			if (block.hash !== block.calculateHash()) {
				isValid = false;
			}

			if (block.previousHash !== this.chain[index - 1].calculateHash()) {
				isValid = false;
			}			
		});

		return isValid;
	}
}

module.exports = Blockchain