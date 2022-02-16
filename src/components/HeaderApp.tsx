import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';

import { ThemeModeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const styles = {
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '4rem',
    borderRadius: 1,
    p: 3,

    bgcolor: 'background.default',
    color: 'text.primary',

    position: 'relative',
  },

  icons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    right: '3rem',
  },

  homeLight: {
    color: '#fff',
  },

  homeDark: {
    color: '#000',
  },
};

function HeaderApp() {
  const theme = useTheme();
  const themeMode = useContext(ThemeModeContext);

  return (
    <Box sx={styles.box}>
      <h1>{themeMode.countryName ? themeMode.countryName : 'Countries in the world'}</h1>
      <Box sx={styles.icons}>
        <Link to={'/'}>
          <HomeIcon sx={theme.palette.mode === 'dark' ? styles.homeLight : styles.homeDark} />
        </Link>
        <IconButton sx={{ ml: 1 }} onClick={themeMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default HeaderApp;
