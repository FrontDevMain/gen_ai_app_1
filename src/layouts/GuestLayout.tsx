import { Box, Stack, styled, Typography } from '@mui/material';
import upImage from '../assets/login/loginUpBg.svg';
import downImage from '../assets/login/loginDownBg.svg';
import centerImage from '../assets/login/loginCenterBg.svg';
import user from '../assets/login/user.svg';
import { Outlet } from 'react-router-dom';
import Reversed from '../assets/logo/Reversed.svg';

export default function GuestLayout() {
  const StyledCard = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: 15,
    padding: 20,
    width: '100%',
    maxWidth: 450,
    margin: 'auto',
  }));
  return (
    <Box
      sx={{
        background: 'linear-gradient(89.94deg, #253072 1.16%, #1B60A5 99.95%)',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Stack
        flexDirection={'row'}
        alignItems={'center'}
        sx={{ position: 'absolute', top: 0, left: 0 }}
      >
        <img src={Reversed} alt="LOGO" width={96} style={{ padding: 15 }} />
        <Typography variant="caption" sx={{ color: '#ffffff', fontSize: 28 }}>
          Aryabhat
        </Typography>
      </Stack>
      <Box
        sx={{
          backgroundImage: `url(${upImage}), url(${downImage}), url(${centerImage})`,
          backgroundPosition: 'top, bottom, bottom center',
          backgroundSize: '100%, 100%, 110%',
          backgroundRepeat: 'no-repeat',
          height: 'inherit',
          width: 'inherit',
        }}
      >
        <Stack
          sx={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box sx={{ width: '100%', position: 'relative' }}>
            <img
              src={user}
              style={{
                position: 'absolute',
                top: -100,
                left: '50%',
                transform: 'translate(-50%, 0px)',
              }}
            />
            <StyledCard>
              <Outlet />
            </StyledCard>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
