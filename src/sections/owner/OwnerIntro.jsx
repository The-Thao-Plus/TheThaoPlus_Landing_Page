import { Container, Grid, Stack, Typography } from '@mui/material';
import { benifitOwner } from 'src/_mock/benitfitOwner';
import AppWidgetBenifit from './AppWidgetBenifit';

function OwnerIntro() {
  return (
    <Container sx={{ mb: 10, pt: 8, pb: 3 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h3" color="main.main">
          VÌ SAO NÊN ĐĂNG KÝ
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.72 }}>
          QUẢN LÝ SÂN BÓNG VỚI THETHAOPLUS?
        </Typography>
      </Stack>
      <Grid container spacing={5}>
        {benifitOwner.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <AppWidgetBenifit title={item.description} total={item.title} color={item.color} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OwnerIntro;
