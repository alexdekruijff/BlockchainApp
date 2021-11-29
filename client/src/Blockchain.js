import React, { useState, useEffect } from "react";
import BuildIcon from '@mui/icons/Build';
import LinkIcon from '@mui/icons/Link';
import {Box, Stack, TextField, IconButton, Button, Paper} from '@mui/material';


function Blockchain(props) {
  const [data, setData] = useState('');
  const [chain, setChain] = useState([]);


  useEffect(() => {
    fetchChain()
  }, [])

  const fetchChain = () => {
    fetch("/main", {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((result) => setChain(result.message))
      .catch((err) => console.log('error'))
  }

  const addBlock = () => {
    fetch("/block", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: data,
      }),
    })
      .then((res) => res.json())
      .then((result) => setData(result.rows))
      .catch((err) => console.log('error'))
  }

  const temperBlockPost = (temperdata, index) => {
    fetch("/temper", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: index,
        data: temperdata,
      }),
    })
      .then((res) => res.json())
      .then((result) => setChain(result.message))
      .catch((err) => console.log('error'))
  }

  const repairBlockPost = (index) => {
    fetch("/pow", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        index: index,
      }),
    })
      .then((res) => res.json())
      .then((result) => setChain(result.message))
      .catch((err) => console.log('error'))
  }

  const updateTemper = (temperdata, index) => {
    const updatedChain = [...chain]
    updatedChain[index].data = temperdata
    if (props.tutState === 1) {
      props.setTutState(2)
    }
    setChain(updatedChain)
    temperBlockPost(temperdata, index)
  }

  const buttonClick = () => {
    addBlock()
    fetchChain()
    if (props.tutState === 0) {
      props.setTutState(1)
    }
  }

  const mineBlock = (index) => {
    repairBlockPost(index)
    if (props.tutState === 2) {
      props.setTutState(3)
    } else if (props.tutState === 3) {
      checkValid()
    }
  }

  const checkValid = () => {
    var valid = true;
    for (let i = 0; i < chain.length;i++) {
      if ((chain[i].previousHash.substring(0, 2) !== Array(3).join("0")) && chain[i].hash.substring(0, 2) !== Array(3).join("0")) {
          valid = false;
      }
    }
    if (valid){
      props.setTutState(4)
    }
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
                    { (block.previousHash.substring(0, 2) !== Array(3).join("0")) && (block.index !== 0) ?
                      <TextField
                        label="Previous Hash"
                        value={block.previousHash}
                        error
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    :
                      <TextField
                        label="Previous Hash"
                        value={block.previousHash}
                        disabled
                        InputProps={{
                          readOnly: true,
                        }}
                      /> }
                  </Box>
                  <Box>
                    <TextField
                      label="Data"
                      value={block.data}
                      onChange={(e) => updateTemper(e.target.value, block.index)}
                    />
                  </Box>
                  <Box>
                    { block.hash.substring(0, 2) !== Array(3).join("0") ?
                      <TextField
                        label="Hash"
                        value={block.hash}
                        error
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    :
                    <TextField
                      label="Hash"
                      value={block.hash}
                      disabled
                      InputProps={{
                        readOnly: true,
                      }}
                    /> }
                  </Box>
                  <Box sx={{display:'flex', justifyContent:'center'}}>
                    <Stack direction="row" spacing={4} >
                      <Box>
                        { block.hash.substring(0, 2) !== Array(3).join("0") ?
                          <IconButton aria-label="repair" onClick={() => mineBlock(block.index)}>
                            <BuildIcon>
                            </BuildIcon>
                          </IconButton>
                        :
                          block.nonce
                        }
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
      <Paper elevation={5}>
        <Box sx={{ p: 2, borderRadius: '5%', display:'flex', alignItems: 'center', width: 200, height: 'max-content'}}>
          <Box sx={{ height: "90%", display:'flex', justifyContent:'center', alignItems: 'center' }}>
            <Stack spacing={2}>
              <Box>
                <TextField
                  label="Data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </Box>
              <Box sx={{ display:'flex', justifyContent:'center' }}>
                <Button variant="contained" onClick={buttonClick}>Add Block</Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
}

export default Blockchain;
