import { useMemo, useCallback } from 'react';
import { Button, Card, CardMedia, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import CardItem from './CardItem';
import picture from '../../../assets/img/background.jpg';

import type { Item, Country, Currencies } from '../../../types';

type CardListProps = {
  country: Partial<Country>;
};

const styles = {
  paper: {
    minHeight: '100vh',
    backgroundImage: `url(${picture})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    maxWidth: '20rem',
  },

  link: {
    textDecoration: 'none',
    padding: '1rem 0',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '10rem',
    backgroundColor: '#2e7d32',
  },
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
      <Card sx={styles.card}>
        <Paper elevation={3}>
          <CardMedia
            component="img"
            height="194"
            image={country?.flags?.svg || country?.flags?.png}
            alt="National flag"
          />
        </Paper>

        <ul>
          {data.map((item: Item) => (
            <CardItem key={item.category} item={item} renderValue={renderValue} />
          ))}
        </ul>
        <Link to="/" style={styles.link}>
          <Button variant="contained" size="large" sx={styles.button}>
            Back
          </Button>
        </Link>
      </Card>
    </Paper>
  );
}

export default CardList;
