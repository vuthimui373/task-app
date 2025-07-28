import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container sx={{ minHeight: '100vh', p: 0, m: 0 }}>
      <Grid item md={8} sx={{ px: 4 }}>
        <h2>Content Area</h2>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2>Slider bar</h2>
      </Grid>
    </Grid>
  );
};
