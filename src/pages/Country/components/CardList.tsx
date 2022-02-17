import { useMemo, useCallback } from 'react';
import { Card, CardMedia, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CardItem from './CardItem';
import background from '../../../assets/img/background.jpg';
import darkBackground from '../../../assets/img/darkBackground.jpg';

import type { Item, Country, Currencies } from '../../../types';

type CardListProps = {
  country: Partial<Country>;
};

function CardList({ country }: CardListProps) {
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

  const theme = useTheme();

  const styles = useMemo(() => {
    return {
      paper: {
        minHeight: 'calc(100vh - 4rem)', //HeaderApp: 4rem
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
        width: '50%',
        margin: '1rem',
        borderRadius: '0.4rem',
      },
    };
  }, [theme]);

  const renderValue = useCallback((value: Item) => {
    if (!value.content) return '';

    switch (value.category) {
      case 'names':
      case 'borders':
        if (!Array.isArray(value.content)) return '';
        return value.content.join(', ');
      case 'region':
        return value.content;
      case 'currencies':
        const valueContent = value.content as Currencies;
        if (Object.keys(valueContent).length === 0) return '';
        const keyCurrencies: string = Object.keys(valueContent)[0];
        return valueContent[keyCurrencies].name;
      case 'languages':
        return Object.values(value.content).join(', ');
      default:
        return '';
    }
  }, []);

  return (
    <Paper sx={styles.paper} elevation={0}>
      <Paper elevation={3} sx={styles.img}>
        <CardMedia
          component="img"
          width="100%"
          image={country?.flags?.svg || country?.flags?.png}
          alt="National flag"
        />
      </Paper>
      <Card sx={styles.card}>
        <ul>
          {data.map((item: Item) => (
            <CardItem key={item.category} item={item} renderValue={renderValue} />
          ))}
        </ul>
      </Card>
    </Paper>
  );
}

export default CardList;
