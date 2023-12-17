import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function HomeUtitlities() {
  return (
    <Box sx={{ backgroundColor: 'main.lighter' }}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Grid container sx={{ py: 3 }} columnSpacing={10}>
          <Grid item md={6}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ pt: 4, pb: 2, display: { xs: 'none', lg: 'flex' }, position: 'relative' }}
            >
              <Box component="img" src="/assets/images/phone_2.png" sx={{ height: '500px', zIndex: 10 }} />
              <Box
                sx={{
                  height: '400px',
                  width: '400px',
                  borderRadius: 999,
                  position: 'absolute',
                  backgroundColor: '#fff',
                }}
              />
              {/* <Box
                component="img"
                src="/assets/images/football.png"
                sx={{
                  width: 200,
                  position: 'absolute',
                  top: 250,
                  right: 30,
                  zIndex: 20,
                  border: '1.5px solid #00c187',
                  borderRadius: 1,
                }}
              /> */}
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ py: 2, display: { xs: 'inline-flex', lg: 'none' } }}
            >
              <Box component="img" src="/assets/images/phone_2.png" sx={{ height: '500px', zIndex: 10 }} />
              <Box component="img" src="/assets/images/polygon.png" sx={{ height: '350px', position: 'absolute' }} />
            </Stack>
          </Grid>

          <Grid item md={6}>
            <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
              <Stack>
                <Typography variant="subtitle2" color="main.main">
                  Đặt sân online
                </Typography>
                <Typography variant="h3">Trải nghiệm</Typography>
                <Typography variant="h3" gutterBottom>
                  ứng dụng tuyệt vời
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.72, letterSpacing: '0.5px', mt: 1, mb: 3 }}>
                  Chuẩn bị sẵn sàng để trải nghiệm ứng dụng Thể Thao Plus - Đặt sân dễ dàng, chơi thể thao vui vẻ!
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<ArrowRightAltIcon />}
                  sx={{
                    width: 'fit-content',
                    backgroundColor: '#00C187',
                    boxShadow: 'rgb(0, 193, 135, 0.84)',
                    '&:hover': {
                      backgroundColor: '#30ca9c',
                    },
                  }}
                >
                  Trải nghiện ngay
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeUtitlities;
