import React, { useEffect, useState } from 'react';
import { Fade } from '@mui/material';

function Tutorial5() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show}>
        <div>
          <h1> P2P Network </h1>
          <p>Now that our blockchain is valid again, we can connect to a network of other peers. Instead of storing the blockchain on
            a central location, like a bank, blockchain uses a decentralized peer-to-peer network. If we scroll down, we can see two other
            peers, each with their own blockchain. The blockchains of the peers are largely the same as ours except for the last block, containing
            a transaction from Alice to Bob.</p>

          <p>
            In order to make a transaction on the blockchain, it has to be transmitted to miners who validate the transaction to see if both parties
            agree. If everything checks out, the miners will record the transaction on a new block, transmit it to the P2P network and add it to everyone's
            copy of the blockchain. Let's say we want to add a new block ourselves without having the data (e.g. a transaction) on it verified by other miners.
            If we transmit the block to the peers on the network, there will be two versions of the blockchain: ours and the one of the peers. Because it is 2-to-1,
            our version of the blockchain will not be accepted in the network as more than half of the peers reach concensus on their version. This way, any fraudulent
            blocks or changes in the blockchain will not be taken up in the network.  
          </p>
        </div>
    </Fade>
  );
}

export default Tutorial5;
