import React from 'react';
import {
  Typography, Grid, Container, Box, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';
import Lightweight from './rankings-page/lightweight';
import Flyweight from './rankings-page/flyweight';
import Bantamweight from './rankings-page/bantamwight';

const RankingsPage = () => (
  <Container>
    <Box sx={{ mt: 3 }}>
      <Typography display="block" variant="h4" align="center" color="common.black">
        UFC REITINGAI

      </Typography>
    </Box>

    <Box sx={{ mt: 6 }}>
      <Grid container>
        <Grid md={3} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="210"
                image="/static/images/rankings/usman.png"
                alt="usman"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  KUMARU USMAN
                </Typography>
                <Typography align="center" variant="body2" color="text.secondary">
                  POUND-FOR-POUND TOP RANK

                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>

          <Typography variant="h6" mt={2}>
            2. Alexander Volkanovski
          </Typography>
          <Typography variant="h6" mt={2}>
            3. Israel Adesanya
          </Typography>
          <Typography variant="h6" mt={2}>
            4. Francis Ngannou
          </Typography>
          <Typography variant="h6" mt={2}>
            5. Charles Oliveira
          </Typography>
          <Typography variant="h6" mt={2}>
            6. Jon Jones
          </Typography>
          <Typography variant="h6" mt={2}>
            7. Max Holloway
          </Typography>
          <Typography variant="h6" mt={2}>
            8. Dustin Poirier
          </Typography>
          <Typography variant="h6" mt={2}>
            9. Petr Yan
          </Typography>
          <Typography variant="h6" mt={2}>
            10. Stipe Miocic
          </Typography>
          {/* <Typography variant="h5" mt={2}>
  11. Glover Teixeira
</Typography> */}

        </Grid>
        <Grid md={3} item>
          <Flyweight />
        </Grid>
        <Grid md={3} item>
          <Bantamweight />
        </Grid>
        <Grid md={3} item>
          <Lightweight />
        </Grid>

      </Grid>

    </Box>

  </Container>

);

export default RankingsPage;
