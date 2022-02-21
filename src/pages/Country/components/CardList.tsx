import { useMemo } from 'react';
import { Card, CardMedia, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CardItem from './CardItem';
import background from '../../../assets/img/background.jpg';
import darkBackground from '../../../assets/img/darkBackground.jpg';

import type { Item, Country } from '../../../types';

type CardListProps = {
  country: Partial<Country>;
};

function CardList({ country }: CardListProps) {
  // make styles for CardList component
  const theme = useTheme();
  const styles = useMemo(() => {
    return {
      container: {
        minHeight: 'calc(100vh - 4rem)', //AppHeader: 4rem
        backgroundImage: `${
          theme.palette.mode === 'light' ? `url(${background})` : `url(${darkBackground})`
        }`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      img: {
        width: '30%',
      },

      card: {
        listStyleType: 'none',
        width: '50%',
        margin: '1rem',
        borderRadius: '0.4rem',
      },
    };
  }, [theme]);

  // create data to render UI
  const data = useMemo<Item[]>(() => {
    if (Object.keys(country).length === 0) return [];

    return [
      {
        category: 'names',
        title: 'Other names',
        content: country?.altSpellings,
      },
      {
        category: 'region',
        title: 'Region',
        content: country?.region,
      },
      {
        category: 'borders',
        title: 'Borders',
        content: country?.borders,
      },
      {
        category: 'currencies',
        title: 'Currencies',
        content: country?.currencies,
      },
      {
        category: 'languages',
        title: 'Languages',
        content: country?.languages,
      },
    ];
  }, [country]);

  return (
    <Paper sx={styles.container} elevation={0}>
      <Paper elevation={3} sx={styles.img}>
        <CardMedia
          component="img"
          width="100%"
          image={country?.flags?.svg || country?.flags?.png}
          alt="National flag"
        />
      </Paper>

      <Card sx={styles.card} component="ul">
        {data.map((item: Item) => (
          <CardItem key={item.category} item={item} />
        ))}
      </Card>
    </Paper>
  );
}

export default CardList;
