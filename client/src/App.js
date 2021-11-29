import Blockchain from './Blockchain';
import Peer from './Peer';
import React, { useState } from "react";
import {Box, Grid, Paper} from '@mui/material';
import Tutorial1 from './Tut1';
import Tutorial2 from './Tut2';
import Tutorial3 from './Tut3';
import Tutorial4 from './Tut4';
import Tutorial5 from './Tut5';
import blockIm from './images/Block.png';
import hashFunc from './images/Hash_Function.png';
import proofow from './images/PoW.png';

function App() {
  const [tutState, setTutState] = useState(0);

  const imageSwitch = (tutstate) => {
    switch(tutstate) {
      case 0:
        return blockIm;
      case 1:
        return hashFunc;
      case 2:
        return proofow;
      default:
        return blockIm;
    }
  }

  const tutorialSwitch = (tutstate) => {
    switch(tutstate) {
      case 0:
        return <Tutorial1 />;
      case 1:
        return <Tutorial2 />;
      case 2:
        return <Tutorial3 />;
      case 3:
        return <Tutorial4 />;
      case 4:
        return <Tutorial5 />;
      default:
        return <Tutorial1 />;
    }
  }
  return (
    <>
      <Box sx={{bgcolor: "#f5f5f5", height: '100%', display:"flex"}}>
        <Grid container spacing={4} sx={{ p:'2%', height: '100%' }}>
          <Grid item xs={12} sm={6} sx={{ height: '50vh' }}>
            <Paper elevation={5} sx={{p: 2, height: '100%'}}>
              {tutorialSwitch(tutState)}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ height: '50vh' }}>
            <Paper elevation={5} sx={{p: 2, height: '100%', display:'flex', justifyContent:'center', alignItems: 'center'}}>
              <Box
                component="img"
                src={imageSwitch(tutState)}
                sx={{width: "90%"}}
                alt="Thumb"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} sx={{p: 2, mt: '2vh', height: '50vh', maxWidth: '100vw', overflow: 'auto', display:'flex', alignItems: 'center'}}>
            <Blockchain tutState={tutState} setTutState={setTutState} />
          </Grid>
          { tutState === 4 ?
            <>
              <Grid item xs={12} sm={12} sx={{p: 2, mt: '2vh', height: '50vh', maxWidth: '100vw', overflow: 'auto', display:'flex', alignItems: 'center'}}>
                <Peer tutState={tutState} setTutState={setTutState} />
              </Grid>
              <Grid item xs={12} sm={12} sx={{p: 2, mt: '2vh', height: '50vh', maxWidth: '100vw', overflow: 'auto', display:'flex', alignItems: 'center'}}>
                <Peer tutState={tutState} setTutState={setTutState} />
              </Grid>
            </>
          :
            null
          }
        </Grid>
      </Box>
    </>
  )
}

export default App;
