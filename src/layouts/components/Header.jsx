import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  MenuItem,
  Popover,
  Slide,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'src/components/logo/Logo';
import Iconify from '../../components/iconify';
import { bgBlur } from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    title: 'Trang chủ',
    link: '/home',
  },
  {
    title: 'Dành cho chủ sân',
    link: '/owner',
  },
  // {
  //   title: 'Liên hệ',
  //   link: '/',
  // },
];

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 80;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `100%`,
  },
}));

const StyledToolbarTop = styled(Toolbar)(({ theme }) => ({
  minHeight: 40,
  [theme.breakpoints.up('lg')]: {
    minHeight: 40,
    padding: theme.spacing(0, 7),
  },
  backgroundColor: theme.palette.main.lighter,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

export const StyledNavItem = styled((props) => <MenuItem disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 40,
  position: 'relative',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
}));

// ----------------------------------------------------------------------

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header(props) {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <HideOnScroll {...props}>
      <StyledRoot>
        <CssBaseline />

        <StyledToolbarTop>
          <Typography variant="subtitle2" sx={{ textTransform: 'uppercase', color: 'text.primary' }}>
            tiện lợi - thông minh
          </Typography>
          <Stack direction="row">
            <IconButton>
              <LanguageIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <a href="https://www.facebook.com/exethethaoplus">
              <IconButton>
                <FacebookRoundedIcon />
              </IconButton>
            </a>
          </Stack>
        </StyledToolbarTop>

        <StyledToolbar>
          <Logo sx={{ display: { xs: 'inline-flex', lg: 'none' } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'inline-flex', lg: 'none' } }} />

          <Stack>
            <IconButton
              onClick={handleOpen}
              sx={{
                mr: 1,
                color: 'text.primary',
                display: { lg: 'none' },
              }}
            >
              <Iconify icon="eva:menu-2-fill" />
            </IconButton>
          </Stack>

          <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
              sx: {
                p: 0,
                mt: 1.5,
                ml: 0.75,
                width: 180,
                '& .MuiMenuItem-root': {
                  typography: 'body2',
                  borderRadius: 0.75,
                },
              },
            }}
          >
            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <StyledNavItem
                  component={NavLink}
                  to={option.link}
                  key={option.title}
                  onClick={handleClose}
                  sx={{
                    px: 2,
                    '&.active': {
                      color: 'text.primary',
                      bgcolor: '#d7f4e2',
                      fontWeight: 'fontWeightBold',
                    },
                  }}
                >
                  {option.title}
                </StyledNavItem>
              ))}
            </Stack>
          </Popover>

          <Logo sx={{ display: { xs: 'none', lg: 'inline-flex' } }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'inline-flex' } }} />

          <Stack direction="row" gap={2} sx={{ p: 1, display: { xs: 'none', lg: 'inline-flex' } }}>
            {MENU_OPTIONS.map((option) => (
              <StyledNavItem
                key={option.title}
                component={NavLink}
                to={option.link}
                sx={{
                  px: 3,
                  '&.active': {
                    color: 'text.primary',
                    bgcolor: '#d7f4e2',
                    fontWeight: 'fontWeightBold',
                  },
                }}
              >
                {option.title}
              </StyledNavItem>
            ))}
          </Stack>
        </StyledToolbar>
      </StyledRoot>
    </HideOnScroll>
  );
}

export default Header;

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
