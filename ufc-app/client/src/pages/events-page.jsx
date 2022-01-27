import * as React from 'react';
import {
  Box, CardMedia, Container, Grid, Typography,
} from '@mui/material';

const EventsPage = () => (
  <Container>
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <CardMedia
            sx={{ width: 128, height: 90, ml: 20 }}
            component="img"
            // height="190"
            image="/static/images/cards/dana.png"
            alt="dana-white"

          />

        </Grid>
        <Grid item xs={9}>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illo voluptatibus beatae sunt blanditiis unde expedita a. Ea?

          </Typography>
        </Grid>

      </Grid>
    </Box>
  </Container>

);

export default EventsPage;
