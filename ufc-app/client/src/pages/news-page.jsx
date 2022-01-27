import React from 'react';
import {
  Typography, Grid, Container, Box, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';

const NewsPage = () => (
  <Container>
    <Box sx={{ mt: 3 }}>
      <Typography display="block" variant="h4" align="center" color="common.black">
        Naujienos

      </Typography>
    </Box>

    <Box sx={{ mt: 6 }}>
      <Grid container>
        <Grid md={4} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image="/static/images/cards/dana.png"
                alt="gdana-white"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, illo voluptatibus beatae sunt blanditiis unde expedita a. Ea?

                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid md={4} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image="/static/images/cards/cyril-francis.png"
                alt="fight"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quas iure sit enim consequuntur facilis. Temporibus, enim accusantium.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid md={4} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image="/static/images/cards/mcgregor.png"
                alt="conor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corporis dolore laudantium cupiditate nesciunt, illum cum reiciendis eligendi?a
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
      </Grid>
    </Box>

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

export default NewsPage;
