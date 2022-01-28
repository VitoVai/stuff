import React from 'react';
import {
  Typography, Grid, Container, Box, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';
import NewsColumn from './news-page/news-column';

const NewsPage = () => (
  <Container>
    <Box sx={{ mt: 3 }}>
      <Typography display="block" variant="h4" align="center" color="common.black">
        NAUJIENOS

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

    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />

    <Box sx={{ mt: 6 }}>
      <Grid container>
        <Grid md={4} item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="190"
                image="/static/images/cards/standoff.png"
                alt="gdana-white"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit hic culpa facilis, cupiditate dignissimos corporis vel exercitationem quae?

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
                image="/static/images/cards/sean.png"
                alt="fight"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vero nemo consequatur recusandae laborum sed facilis iure autem.
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
                image="/static/images/cards/trump.png"
                alt="conor"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum aliquam recusandae beatae iste placeat dignissimos vero quae.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

        </Grid>
      </Grid>
    </Box>

    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />
    <NewsColumn />

  </Container>

);

export default NewsPage;
