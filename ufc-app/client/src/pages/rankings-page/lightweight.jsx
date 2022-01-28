import React from 'react';
import {
  Typography, Grid, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';

const Lightweight = () => (

  <Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="/static/images/rankings/charles.png"
          alt="usman"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            CHARLES OLIVEIRA
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            LIGHTWEIGHT CHAMPION

          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

    <Typography variant="h6" mt={2}>
      1. Justin Gaethje
    </Typography>
    <Typography variant="h6" mt={2}>
      2. Dustin Poirier
    </Typography>
    <Typography variant="h6" mt={2}>
      3. Beneil Dariush
    </Typography>
    <Typography variant="h6" mt={2}>
      4. Islam Makhachev
    </Typography>
    <Typography variant="h6" mt={2}>
      5. Michael Chandler
    </Typography>
    <Typography variant="h6" mt={2}>
      6. Rafael Dos Anjos
    </Typography>
    <Typography variant="h6" mt={2}>
      7. Tony Ferguson
    </Typography>
    <Typography variant="h6" mt={2}>
      8. Dan Hooker
    </Typography>
    <Typography variant="h6" mt={2}>
      9. Conor McGregor
    </Typography>
    <Typography variant="h6" mt={2}>
      10. Gregor Gillespie
    </Typography>

  </Grid>

);

export default Lightweight;
