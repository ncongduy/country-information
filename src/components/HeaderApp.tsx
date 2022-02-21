import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { ValueContext } from '../contexts';
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

  heading: {
    width: '50rem',
    textAlign: 'center' as 'center',
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

function AppHeader() {
  const theme = useTheme();
  const { countryName, toggleColorMode } = useContext(ValueContext);
  const dispatch = useDispatch();
  const favoriteList = useSelector((state: RootState) => state.favorite.favorite);
  const navigate = useNavigate();

  return (
    <Box sx={styles.box}>
      <h1 style={styles.heading}>{countryName ? countryName : 'Countries in the world'}</h1>
      <Box sx={styles.icons}>
        <IconButton
          onClick={() => {
            navigate('/');
            dispatch(toggleDisplay(false));
          }}
          size="large"
          aria-label="home button"
          color="inherit"
          sx={{ ml: 1 }}
        >
          <HomeIcon />
        </IconButton>

        <IconButton
          onClick={() => {
            navigate('/');
            dispatch(toggleDisplay(true));
          }}
          size="large"
          aria-label="show number of favorite country"
          color="inherit"
          sx={{ ml: 1 }}
        >
          <Badge badgeContent={favoriteList.length} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>

        <IconButton onClick={toggleColorMode} size="large" color="inherit" sx={{ ml: 1 }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default AppHeader;
