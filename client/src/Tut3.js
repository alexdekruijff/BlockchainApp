import React, { useEffect, useState } from 'react';
import { Fade, Box } from '@mui/material';

function Tutorial3() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show}>
        <Box sx={{height:'100%'}}>
          <h1> Proof of Work </h1>
          <p>See how the hashes of the following blocks changed as we edited the data in the block that comes before them? If we change something in
          a block, its hash will change and cause a chain effect in the blocks that come after it. This is an important aspect in the security of blockhains</p>

          <p>We can see that the affected blocks now give an error for the hashes. As you might have already noticed, everytime we add a block,
          the resulting hash begins with "00". The blockchain only accepts blocks that have a hash starting with two zeroes, this is called a proof of work. Whenever we
          edit the information in a block, a new hash is generated which does not necessarily start with two zeroes, making all the following blocks also invalid. We cannot
          simply tell the hash function to start with two zeroes, whatever hash is generated depends on the information we put into it. The only thing we can do is add some
          value to the input and hope that the hash function gives us a hash starting with two zeroes. This is called the nonce value and it is displayed on the bottom
          left of the of block. The nonce values in the corrupted blocks are replaced by mining (wrench) icons, lets click on one to see what happens!</p>
        </Box>
    </Fade>
  );
}

export default Tutorial3;
