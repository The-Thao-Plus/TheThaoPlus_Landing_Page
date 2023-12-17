import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledNumber = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(6),
  height: theme.spacing(6),
  justifyContent: 'center',
  backgroundColor: theme.palette.main.main,
}));

function OwnerRegister() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'main.lighter' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Stack justifyContent="center" sx={{ height: '100%' }}>
              <Typography variant="h3">Đăng ký quản lý sân bóng với</Typography>
              <Typography variant="h3" gutterBottom>
                TheThaoPlus trong 3 bước
              </Typography>
              <Stack gap={3} mt={2}>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <StyledNumber>
                    <Typography variant="h4" color="white">
                      1
                    </Typography>
                  </StyledNumber>
                  <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                    Điền thông tin đầy đủ và chính xác
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <StyledNumber>
                    <Typography variant="h4" color="white">
                      2
                    </Typography>
                  </StyledNumber>
                  <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                    TheThaoPlus liên hệ và xác nhận thông tin.
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap={1.5}>
                  <StyledNumber>
                    <Typography variant="h4" color="white">
                      3
                    </Typography>
                  </StyledNumber>
                  <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                    Vào cổng quản lý và bắt đầu quản lý sân bóng với TheThaoPlus!
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/manager.png"
              sx={{ border: '5px solid #d7f4e2', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OwnerRegister;
