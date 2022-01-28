import React from 'react';
import {
  Typography, Grid, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';

const Flyweight = () => (

  <Grid>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="/static/images/rankings/deiveson.png"
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
    <Typography variant="h5">

      <Typography variant="h5" mt={2}>
        1. Brandon Moreno
      </Typography>
      <Typography variant="h5" mt={2}>
        2. Askar Askarov
      </Typography>
      <Typography variant="h5" mt={2}>
        3. Alexandre Pantoja
      </Typography>
      <Typography variant="h5" mt={2}>
        4. Brandon Royval
      </Typography>
      <Typography variant="h5" mt={2}>
        5. Alex Perez
      </Typography>
      <Typography variant="h5" mt={2}>
        6. Kai Kara France
      </Typography>
      <Typography variant="h5" mt={2}>
        7. Rogerio Bontorin
      </Typography>
      <Typography variant="h5" mt={2}>
        8. Matheus Nicolau
      </Typography>
      <Typography variant="h5" mt={2}>
        9. Matt Schnell
      </Typography>
      <Typography variant="h5" mt={2}>
        10. David Dvorak
      </Typography>

    </Typography>
  </Grid>

);

export default Flyweight;
