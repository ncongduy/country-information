import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ThemeModeContext } from '../contexts/ThemeContext';
import { toggleDisplay } from '../redux/actions/favoriteCountryAction';
import type { RootState } from '../redux/store';

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
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: RootState) => state.favorite.favorite);

  return (
    <Box sx={styles.box}>
      <h1>{themeMode.countryName ? themeMode.countryName : 'Countries in the world'}</h1>
      <Box sx={styles.icons}>
        <Link to={'/'}>
          <IconButton
            onClick={() => dispatch(toggleDisplay(false))}
            size="large"
            aria-label="home button"
            color="inherit"
          >
            <HomeIcon sx={theme.palette.mode === 'dark' ? styles.homeLight : styles.homeDark} />
          </IconButton>
        </Link>
        <IconButton
          onClick={() => dispatch(toggleDisplay(true))}
          size="large"
          aria-label="show number of favorite"
          color="inherit"
        >
          <Badge badgeContent={favoriteList.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <IconButton size="large" sx={{ ml: 1 }} onClick={themeMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default HeaderApp;
