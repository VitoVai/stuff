import React from 'react';
import {
  Typography, Grid, Container, Box, styled, Paper, ButtonBase, Card, CardContent, CardMedia, CardActionArea,
} from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

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
    <Box sx={{ mt: 2 }}>
      <Grid spacing={2} container>
        <Grid>
          <Paper sx={{
            p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1,
          }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src="/static/images/grid/complex.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 600,
              height: 128,
            },
          }}
        >
          <Paper elevation={0} />
          <Paper />
          <Paper elevation={3} />
        </Box>
        <Grid item>
          Iki šiol garsūs kovotojai pasidalijo po pergalę. Tiesioginė transliacija iš JAV per „TV3 Sport“ kanalą ir naujos kartos televiziją „Go3“ prasidės liepos 11-ąją, sekmadienį, 5.00 val. Iš pradžių bus parodyta keletas įžanginių kovų. UFC narve D. Poirier su C. McGregoru santykius aiškinosi šiemet sausio mėnesį. Tada antrajame raunde amerikietis nokautavo varžovą. 2014-ųjų rugsėjį airis nugalėjo varžovą, kurį pasiuntė į nokautą jau pirmajame raunde.
          Skaitykite daugiau: https://www.delfi.lt/sportas/kitos-sporto-sakos/savaitgali-ufc-narve-laukiama-ir-nenuspejama-poirier-ir-mcgregoro-kova.d?id=87666231

        </Grid>
        <Grid item>
          Iki šiol garsūs kovotojai pasidalijo po pergalę. Tiesioginė transliacija iš JAV per „TV3 Sport“ kanalą ir naujos kartos televiziją „Go3“ prasidės liepos 11-ąją, sekmadienį, 5.00 val. Iš pradžių bus parodyta keletas įžanginių kovų. UFC narve D. Poirier su C. McGregoru santykius aiškinosi šiemet sausio mėnesį. Tada antrajame raunde amerikietis nokautavo varžovą. 2014-ųjų rugsėjį airis nugalėjo varžovą, kurį pasiuntė į nokautą jau pirmajame raunde.
          Skaitykite daugiau: https://www.delfi.lt/sportas/kitos-sporto-sakos/savaitgali-ufc-narve-laukiama-ir-nenuspejama-poirier-ir-mcgregoro-kova.d?id=87666231

        </Grid>
        <Grid item>
          Iki šiol garsūs kovotojai pasidalijo po pergalę. Tiesioginė transliacija iš JAV per „TV3 Sport“ kanalą ir naujos kartos televiziją „Go3“ prasidės liepos 11-ąją, sekmadienį, 5.00 val. Iš pradžių bus parodyta keletas įžanginių kovų. UFC narve D. Poirier su C. McGregoru santykius aiškinosi šiemet sausio mėnesį. Tada antrajame raunde amerikietis nokautavo varžovą. 2014-ųjų rugsėjį airis nugalėjo varžovą, kurį pasiuntė į nokautą jau pirmajame raunde.
          Skaitykite daugiau: https://www.delfi.lt/sportas/kitos-sporto-sakos/savaitgali-ufc-narve-laukiama-ir-nenuspejama-poirier-ir-mcgregoro-kova.d?id=87666231

        </Grid>
        <Paper sx={{
          p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1,
        }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src="/static/images/grid/complex.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Standard license
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2">
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  $19.00
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>

  </Container>

);

export default NewsPage;
