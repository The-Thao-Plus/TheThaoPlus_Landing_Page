import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';

function OwnerSlide() {
  return (
    <Container maxWidth="xl" sx={{ mb: 5 }}>
      <Grid container sx={{ py: 3, px: { xs: 0, md: 8 } }} spacing={5}>
        <Grid item md={5}>
          <Stack justifyContent="center" sx={{ height: '100%' }}>
            <Typography variant="h2">Quản lý sân</Typography>
            <Typography variant="h2" gutterBottom>
              một cách hiệu quả nhất
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.72, letterSpacing: '0.5px', my: 1 }}>
              "Thể Thao Plus" là ứng dụng hỗ trợ cho chủ các sân thể thao quản lý và quảng bá thông tin về sân thể thao
              của mình một cách hiệu quả và tiết kiệm.
            </Typography>
            <Stack direction="row" mt={2}>
              <Button
                component="a"
                href="https://thethaoplus-supplier.vercel.app/login"
                variant="contained"
                startIcon={<ArrowRightAltIcon />}
                sx={{
                  color: '#fff',
                  backgroundColor: '#00C187',
                  '&:hover': {
                    backgroundColor: '#30ca9c',
                  },
                }}
              >
                Đăng ký ngay
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack alignItems="center" justifyContent="center" sx={{ py: 5 }}>
            <Box
              component="img"
              src="/assets/images/destop_web.png"
              sx={{ border: '5px solid #d7f4e2', borderRadius: 2 }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OwnerSlide;
