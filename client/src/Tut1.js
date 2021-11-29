import React from 'react';
import {Box} from '@mui/material';

function Tutorial1() {
  return (
    <Box sx={{height:'100%'}}>
      <h1> Blockchain </h1>
      <p>Welcome to this Blockchain demo! Blockchain has grown incredibly popular
      in the past few years. Blockchain technologies like cryptocurrencies and NFT's
      have taken the world by storm. However, what is a blockchain and how does it actually
      work? We will go step by step through the through the basic aspects of a blockchain in an interactive demo
      so you might be able to invent your own blockchain creations!</p>

    <p>Simply put, a blockchain is chain of blocks that each store some information. Each block stores some
      data paired with an index, date, previous hash and a hash. The type of data stored in the blocks depends on
      the blockhain. For example, Bitcoin stores a list with transactions and its details. But for our demo, it will
      suffice to store some simple messages. We will go through the rest of information stored in a block in a second
      but first, let's try to add a new block to the blockchain!</p>
  </Box>
  );
}

export default Tutorial1;
