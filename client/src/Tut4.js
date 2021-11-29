import React, { useEffect, useState } from 'react';
import { Fade } from '@mui/material';

function Tutorial4() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show}>
        <div>
          <h1> Mining </h1>
          <p>
            In order to find a nonce that gives us a valid hash, we have to try out a lot of different nonce values until we find a hash that starts with two zeroes.
            This process is called mining. In our demo, we can mine new blocks pretty quickly because the hash only needs to start with two zeroes. However, as the number
            of zeroes increases, so does the difficulty increase of finding a proper nonce value. For Bitcoin, this takes about 10 minutes per block. As we can see from
            our blockchain below, if we change something in a block, all blocks that follow will have to be re-mined. Blockchains can easily contain hundreds of thousands
            blocks, so if we wanted to change something in a blockchain, it would take huge amounts of time to recalculate all the blocks.
          </p>

          <p>Let's re-mine all the corrupted blocks to make our blockchain valid again.</p>
        </div>
    </Fade>
  );
}

export default Tutorial4;
