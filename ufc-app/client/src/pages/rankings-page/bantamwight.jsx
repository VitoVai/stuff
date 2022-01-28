import React from 'react';
import {
  Typography, Grid, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';

const Bantamweight = () => (

  <Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="/static/images/rankings/aljamain.png"
          alt="usman"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            ALJAMAIN STERLING
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            BANTAMWEIGHT CHAMPION

          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

    <Typography variant="h6" mt={2}>
      1. Petr Yan
    </Typography>
    <Typography variant="h6" mt={2}>
      2. TJ Dillashaw
    </Typography>
    <Typography variant="h6" mt={2}>
      3. José Aldo
    </Typography>
    <Typography variant="h6" mt={2}>
      4. Cory Sandhagen
    </Typography>
    <Typography variant="h6" mt={2}>
      5. Rob Font
    </Typography>
    <Typography variant="h6" mt={2}>
      6. Merab Dvalishvili
    </Typography>
    <Typography variant="h6" mt={2}>
      7. Dominick Cruz
    </Typography>
    <Typography variant="h6" mt={2}>
      8. Marlon Vera
    </Typography>
    <Typography variant="h6" mt={2}>
      9. Pedro Munhoz
    </Typography>
    <Typography variant="h6" mt={2}>
      10. Marlon Moraes
    </Typography>

  </Grid>

);

export default Bantamweight;
