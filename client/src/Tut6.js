import React, { useEffect, useState } from 'react';
import { Fade } from '@mui/material';

function Tutorial6() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Fade in={show}>
        <div>
          <h1> End </h1>
          <p>
            Blockchain is often associated with cryptocurrencies, however as we have seen from the demo,
            money transactions are just one type of data that can be stored on a block. The beauty of blockchain is that we can track anything and be
            sure that the information is not fraudulent. The labour process of a product can be tracked, peers can trade energy in a smart energy grid,
            or digital voting could be securely registered. Due to the secure and decentralized nature of blockchain, transactions can be made without the need for validation
            from a central authority. By finding new and creative ways of applying blockchain, we can change the world to be more fair and transparant.
          </p>

          <p>
            Thank you for learning about blockchain!
          </p>
        </div>
    </Fade>
  );
}

export default Tutorial6;
