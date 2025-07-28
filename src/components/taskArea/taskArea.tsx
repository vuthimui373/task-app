import React ,{FC, ReactElement} from "react";
import {Box} from '@mui/material';
export const TaskArea: FC=():ReactElement=>{
    return(
    <Box  sx={{  display: 'flex' ,minHeight: '100vh', p: 0, m: 0 }}>
      <Box sx={{ px: 4 }}>
        <h2>Content Area2</h2>
      </Box>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '33.33%', 
          height: '100vh',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Slider bar2</h2>
      </Box>
    </Box>
    );
}
