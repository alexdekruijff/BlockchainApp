
const SHA256 = require('crypto-js/sha256');

const express = require("express");
const path = require('path');


const PORT = process.env.PORT || 3001;

const app = express();


class Blockchain {
  constructor(){
    this.difficulty = 2;
    this.chain = [this.createGenesisBlock()];
    this.chain[0].mineBock(this.difficulty);
  }

  createGenesisBlock(){
    return new Block(0, "01/01/2017", "Genesis Block", "0");
  }

  getLatestBlock(){
    return this.chain[this.chain.length -1];
  }

  addBlock(newBlock){
    newBlock.previousHash = this.getLatestBlock().hash;
    // newBlock.hash = newBlock.calculateHash();
    newBlock.mineBock(this.difficulty);
    this.chain.push(newBlock);
  }

  repairBlock(index){
    this.chain[index].nonce = 0;
    this.chain[index].mineBock(this.difficulty);
    for (let i =index+1; i<this.chain.length;i++){
      this.chain[i].previousHash = this.chain[i-1].hash;
      this.chain[i].hash = this.chain[i].calculateHash();
    }
  }

  temperBlock(index, data){
    this.chain[index].data = data;
    this.chain[index].hash = this.chain[index].calculateHash();
    for (let i =index+1; i<this.chain.length;i++){
      this.chain[i].previousHash = this.chain[i-1].hash;
      this.chain[i].hash = this.chain[i].calculateHash();
    }
  }
}

class Block {
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash(){
    return SHA256(this.index + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
  }

  mineBock(difficulty){
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}

let blockChain = new Blockchain();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/main", (req, res) => {
  res.json({ message: blockChain.chain });
});

app.get("/peer", (req, res) => {
  let peerChain = new Blockchain();
  peerChain.chain[0] = blockChain.chain[0];
  for (let i = 1; i<blockChain.chain.length;i++){
    peerChain.chain.push(blockChain.chain[i]);
  }
  peerChain.addBlock(new Block(peerChain.getLatestBlock.chain.length, "01/01/2017", "Alice pays Bob 10", peerChain.getLatestBlock.hash));
  res.json({ message: peerChain.chain });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post("/temper", (req, res) => {
  blockChain.temperBlock(req.body.index,req.body.data);
  res.json({ message: blockChain.chain });
});

app.post("/pow", (req, res) => {
  blockChain.repairBlock(req.body.index);
  res.json({ message: blockChain.chain });
});

app.post("/block", (req, res) => {
  blockChain.addBlock(new Block(blockChain.getLatestBlock().index+1, "01/01/2017", req.body.data));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
