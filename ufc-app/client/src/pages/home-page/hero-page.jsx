import React from 'react';
import { Typography, Box } from '@mui/material';

const HeroPage = () => (

  <Box sx={{
    backgroundImage: 'url(/heroPicture1.jpg)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95vh',
    // width: '100vw',
    // mb: -6,
  }}
  >

    {/* <Box>
      <CardMedia
        component="img"
        height="390"
        image="/static/images/cards/fight-night.png"
        alt="conor"
      />
    </Box> */}
    <Box sx={{ width: { sm: '100%', md: '80%' } }}>
      <Typography display="block" variant="h2" align="center" color="common.white">
        UFC Fight Night: Hermansson vs. Strickland
        <br />
        <Typography variant="h3"> Vasario 6, 2022</Typography>
      </Typography>
    </Box>
  </Box>
);

export default HeroPage;
