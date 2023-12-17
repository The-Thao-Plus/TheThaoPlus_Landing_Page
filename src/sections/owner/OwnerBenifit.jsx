import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

function OwnerBenifit() {
  return (
    <Box sx={{ py: 10, backgroundColor: 'main.lighter' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/assets/images/future.png"
              sx={{ border: '5px solid #d7f4e2', borderRadius: 2 }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack justifyContent="center" sx={{ height: '100%' }}>
              <Typography gutterBottom variant="h4">
                Với đầy đủ các tính năng
              </Typography>

              <Grid container>
                <Grid item xs={12} md={6}>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Nhận lịch đặt sân online
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Quản lý lịch đặt sân
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Tùy chỉnh giá theo ngày giờ
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Hỗ trợ tìm kiếm với người chơi mới
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Kết nối với khách hàng thân thiết
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Thống kê, báo cáo doanh thu
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack gap={3} mt={1}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <IconButton sx={{ color: 'main.main' }}>
                        <StarRoundedIcon />
                      </IconButton>
                      <Typography variant="subtitle1" sx={{ letterSpacing: '0.5px' }}>
                        Miễn phí dùng thử
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OwnerBenifit;
