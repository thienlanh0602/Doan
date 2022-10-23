import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Headers from '../Home-Header/Home-Header';
import Navigations from '../Home-NavBar/Home-NavBar';
import Contents from '../Home-Content/Home-Content';
import Post from '../Post/Post';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Home() { 
  return (
    <div className="Home">
          <AppBar position='absolute' style={{backgroundColor:"white",color:"black", boxShadow:"0px 0px 0px 1px #A9A9A9"}} >
          <Headers/>
          <Navigations/>        
          </AppBar>
          <Grid container pt={40} pr={50} spacing={20}  style={{}}>
            <Grid item xs ={10}>
              <Box>
                <Contents/> 
              </Box>
            </Grid>           
            <Grid item xs ={10}>
              <Box>
              
              </Box>
            </Grid>
          </Grid>
    </div>
  );
}
