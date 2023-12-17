import React from 'react';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, Grid, Stack, Typography } from '@mui/material';
import { AppStore, GooglePlay } from 'src/_mock/icon';
import { useModal } from 'src/hooks/useModal';

function HomeIntro() {
  const { toogleOpen, isOpen } = useModal();

  return (
    <Container maxWidth="lg" sx={{ mb: 7 }}>
      <Grid container sx={{ py: 3 }} spacing={5}>
        <Grid item md={6}>
          <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
            <Stack>
              <Typography variant="h2">Đặt sân online</Typography>
              <Typography variant="h2" gutterBottom>
                cực dễ tại bất cứ đâu
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.72, letterSpacing: '0.5px', my: 1 }}>
                "Thể Thao Plus" là ứng dụng tiện lợi và thông minh, giúp bạn tìm kiếm, đặt sân thể thao dễ dàng chỉ với
                vài cú chạm điện thoại.
              </Typography>
              <Stack direction="row" alignItems="center" gap={2} mt={2}>
                <Button onClick={toogleOpen}>
                  <GooglePlay />
                </Button>
                <Button onClick={toogleOpen}>
                  <AppStore />
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ py: 5, pl: 11.5, display: { xs: 'none', lg: 'flex' } }}
          >
            <Box component="img" src="/assets/images/phone_1.png" sx={{ height: '600px', zIndex: 10 }} />
            <Box component="img" src="/assets/images/polygon.png" sx={{ height: '450px', position: 'absolute' }} />
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ py: 2, pl: 12.5, display: { xs: 'inline-flex', lg: 'none' } }}
          >
            <Box component="img" src="/assets/images/phone_1.png" sx={{ height: '500px', zIndex: 10 }} />
            <Box component="img" src="/assets/images/polygon.png" sx={{ height: '350px', position: 'absolute' }} />
          </Stack>
        </Grid>
      </Grid>

      {isOpen && (
        <Dialog
          sx={{
            '.css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
              width: '300px',
              maxWidth: '300px',
            },
          }}
          open={isOpen}
          onClose={toogleOpen}
        >
          <DialogContent sx={{ width: '100%' }}>
            <Typography variant="h5">App đang trong thời gian xử lý và deploy!</Typography>
            <Typography variant="subtitle1">Bạn hãy trở lại với TheThaoPlus nhé.</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="secondary" size="small" onClick={toogleOpen}>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
}

export default HomeIntro;
