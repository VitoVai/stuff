import * as React from 'react';
import {
  Box, CardMedia, Grid, Typography,
} from '@mui/material';

const NewsColumn = () => (
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
          sx={{ width: 128, height: 90, ml: 14 }}
          component="img"
            // height="190"
          image="/static/images/cards/ufc-news.png"
          alt="dana-white"
        />

      </Grid>
      <Grid item xs={9}>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia numquam debitis voluptas impedit sed eum, quidem iure et!

        </Typography>
      </Grid>

    </Grid>
  </Box>

);

export default NewsColumn;
