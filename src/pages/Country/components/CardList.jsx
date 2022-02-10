import { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardMedia, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import CardItem from './CardItem';
import picture from '../../../assets/img/background.jpg';

CardList.propTypes = {
  country: PropTypes.object.isRequired,
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

function CardList({ country }) {
  const data = useMemo(() => {
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

  const renderValue = useCallback((value) => {
    if (!value.content) return '';

    switch (value.category) {
      case 'names':
      case 'borders':
        return value.content.join(', ');
      case 'region':
        return value.content;
      case 'currencies':
        const keyCurrencies = Object.keys(value.content)[0];
        return value.content[keyCurrencies]?.name;
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
            image={country.flags.svg || country.flags.png}
            alt="National flag"
          />
        </Paper>

        <ul>
          {data.map((item) => (
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
