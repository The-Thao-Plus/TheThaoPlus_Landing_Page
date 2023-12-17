import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, Stack, Typography } from '@mui/material';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Stack
      ref={ref}
      component="div"
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        color: '#00c187',
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        src="/assets/images/logo_thethaoplus.png"
        sx={{ width: 50, height: 50, borderRadius: 999 }}
      />
      <Typography sx={{ fontSize: 25, fontWeight: 'bold' }}>TheThaoPlus</Typography>
    </Stack>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
