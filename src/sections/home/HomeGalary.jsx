import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

import './swiper.css';

function HomeGalary() {
  return (
    <Container sx={{ pb: 12 }}>
      <Stack alignItems="center" justifyContent="center" gap={1} mb={5}>
        <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
          giao diện thân thiện của chúng tôi
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          Tìm cơ sở thể thao và gặp gỡ những người yêu thích thể thao!
        </Typography>
      </Stack>

      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.00': {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/welcome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/UserHome.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/ListStadium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/stadium.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/detail.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/booking.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/bookingSuccess.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/Mybooking.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/assets/images/galary/review.png" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default HomeGalary;
