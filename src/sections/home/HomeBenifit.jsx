import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { AppWidgetSummary } from '../@dashboard/app';

function HomeBenifit() {
  return (
    <Container sx={{ py: 10 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          để có cuộc sông tốt đẹp hơn
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Mọi người đều xứng đáng có được trải nghiệm sống tốt hơn.
        </Typography>
      </Stack>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Tất cả các môn thể thao bạn muốn, đều có trong TheThaoPlus. "
            total="Tích hợp"
            color="success"
            icon={<AccountTreeIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Tìm kiếm và đặt sân dễ dàng chỉ với vài thao tác"
            total="Tiện lợi"
            color="info"
            icon={<AccessAlarmIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AppWidgetSummary
            title="Không mất chi phí dịch vụ, nhưng rất nhiều lợi ích bổ sung."
            total="100% Miễn phí"
            color="secondary"
            icon={<MonetizationOnRoundedIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
      <Box sx={{ px: { xs: 0, md: 24.8 } }}>
        <Grid container columnSpacing={5} mt={5}>
          <Grid item xs={12} md={6}>
            <AppWidgetSummary
              title="Cập nhật tự động thông tin tìm kiếm hàng giờ."
              total="Cập nhật tự động"
              color="warning"
              icon={<BrowserUpdatedIcon fontSize="large" />}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ pt: { xs: 5, md: 0 } }}>
            <AppWidgetSummary
              title="Cùng nhau tạo ra một lối sống lành mạnh chỉ trong vài bước."
              total="Sức khỏe"
              color="error"
              icon={<FavoriteRoundedIcon fontSize="large" />}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HomeBenifit;
