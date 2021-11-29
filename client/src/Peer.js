import React, { useState, useEffect } from "react";
import LinkIcon from '@mui/icons/Link';
import {Box, Stack, TextField, Paper} from '@mui/material';


function Peer(props) {
  const [chain, setChain] = useState([]);


  useEffect(() => {
    fetchChain()
  }, [])

  const fetchChain = () => {
    fetch("/peer", {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setChain(result.message))
      .catch((err) => console.log('error'))
  }



  return (
    <Stack spacing={2} direction="row">
      {chain.map(block =>
        <>
          <Paper elevation={5}>
            <Box sx={{ p: 2, display:'flex', justifyContent:'center', alignItems: 'center', width: 200, height: 'max-content'}}>
              <Box sx={{ height: "90%", display:'flex', justifyContent:'center', alignItems: 'center' }}>
                <Stack spacing={2}>
                  <Box sx={{display:'flex', justifyContent:'center', margin: 1}}>
                    Block {block.index}
                  </Box>
                  <Box>
                    <TextField
                      label="Previous Hash"
                      value={block.previousHash}
                      disabled
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </Box>
                  <Box>
                    <TextField
                      label="Data"
                      value={block.data}
                      disabled
                    />
                  </Box>
                  <Box>
                  <TextField
                    label="Hash"
                    value={block.hash}
                    disabled
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  </Box>
                  <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Stack direction="row" spacing={4} >
                      <Box>
                        {block.nonce}
                      </Box>
                      <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                        date
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Paper>
          <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
            <LinkIcon>
            </LinkIcon>
          </Box>
        </>
      )}
    </Stack>
  );
}

export default Peer;
