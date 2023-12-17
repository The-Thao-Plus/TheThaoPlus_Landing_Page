import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';

function HomeReview() {
  return (
    <Box sx={{ backgroundColor: 'main.lighter' }}>
      <Container sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 10, md: 12 } }}>
        <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
          <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
            mọi người nghĩ gì về TheThaoPlus
          </Typography>
          {/* <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
              Mọi người đều xứng đáng có được trải nghiệm sống tốt hơn.
            </Typography> */}
        </Stack>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quam! Similique repudiandae, quae,
              dolorem eveniet suscipit voluptatibus vel earum ipsam natus, obcaecati voluptates eligendi magnam. Eveniet
              praesentium aliquam aperiam maxime.
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quam! Similique repudiandae, quae,
              dolorem eveniet suscipit voluptatibus vel earum ipsam natus, obcaecati voluptates eligendi magnam. Eveniet
              praesentium aliquam aperiam maxime.
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, quam! Similique repudiandae, quae,
              dolorem eveniet suscipit voluptatibus vel earum ipsam natus, obcaecati voluptates eligendi magnam. Eveniet
              praesentium aliquam aperiam maxime.
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeReview;
