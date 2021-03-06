import React, { useEffect, useState } from 'react';
import { Fade } from '@mui/material';

function Tutorial2() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show}>
        <div>
          <h1> Hash Function </h1>
          <p>
            Each time a new block is added to the blockchain, a hash is generated for that block. Similar to a fingerprint, a hash is a unique
            identifier that represents the infomation stored in the block. In order to form a chain, the information stored on a new block is
            linked to the hash of the previous block.</p>

          <p>
            The hash is generated by a hash function. This function can take any kind of input (e.g. a list of transactions, or a simple message)
            and it will generate a code that looks somethat random. However, it is definitely not random! The hash depends on the information that
            the block stores. If any information changes, so will the hash value. But, because all blocks are linked to the hash of the previous block,
            the hashes of all the the blocks that come after it will also change!
          </p>
          <p>
            Let's try to add some more blocks
            and change the data in the first block we created to see what happens.
          </p>
        </div>
    </Fade>
  );
}

export default Tutorial2;
