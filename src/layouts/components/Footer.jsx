import { Box, Button, Container, Dialog, DialogActions, DialogContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from 'src/components/logo/Logo';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import { AppStore, GooglePlay } from 'src/_mock/icon';
import { useModal } from 'src/hooks/useModal';

function Footer() {
  const { toogleOpen, isOpen } = useModal();

  return (
    <Box sx={{ backgroundColor: 'grey.200', mt: 7 }}>
      <Container>
        <Grid container spacing={7} sx={{ pb: 7 }}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" mb={2}>
              <Logo />
              <Box sx={{ flexGrow: 1 }} />
            </Stack>

            <Typography gutterBottom sx={{ textAlign: 'justify' }}>
              Hãy để tôi giới thiệu cho bạn ứng dụng đặt sân "Thể Thao Plus" - người bạn đồng hành tin cậy của mọi tín
              đồ thể thao!
            </Typography>
            <Typography sx={{ mb: 4, textAlign: 'justify' }}>
              Hãy để chúng tôi giúp bạn tỏa sáng trên sân và trải nghiệm niềm vui bất tận của tất cả loại hình thể thao!
              Với "Thể Thao Plus", việc tìm kiếm và đặt sân chưa bao giờ dễ dàng đến thế.
            </Typography>

            <Stack direction="row" alignItems="center" gap={2} mt={2}>
              <Button onClick={toogleOpen}>
                <GooglePlay />
              </Button>
              <Button onClick={toogleOpen}>
                <AppStore />
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">LIÊN HỆ:</Typography>
            <Stack gap={1.5} mt={2}>
              <Stack direction="row" alignItems="center" gap={1}>
                <FeedbackRoundedIcon sx={{ color: 'main.main' }} />
                <Typography variant="subtitle1">Trang · Thể thao · Thể thao & giải trí</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <AccessTimeFilledRoundedIcon sx={{ color: 'main.main' }} />
                <Typography>Luôn mở cửa</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocationOnIcon sx={{ color: 'main.main' }} />
                <Typography>Lô E2a-7, Đường D1 Khu Công nghệ cao, Ho Chi Minh City, Vietnam</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalPhoneIcon sx={{ color: 'main.main' }} />
                <Typography>091 906 38 12</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <EmailRoundedIcon sx={{ color: 'main.main' }} />
                <Typography>thethaoplus@gmail.com</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Stack alignItems="center" sx={{ py: 1, backgroundColor: '#000' }}>
        <Typography variant="subtitle2" color="#fff" sx={{ letterSpacing: 0.5 }}>
          Copyright 2023 @TheThaoPlus
        </Typography>
      </Stack>

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
    </Box>
  );
}

export default Footer;
