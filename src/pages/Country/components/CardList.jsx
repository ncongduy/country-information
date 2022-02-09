import { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardMedia } from '@mui/material';

import CardItem from './CardItem';
import { Link } from 'react-router-dom';

CardList.propTypes = {
  country: PropTypes.object.isRequired,
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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={country.flags.svg || country.flags.png}
        alt="National flag"
      />
      <ul>
        {data.map((item) => (
          <CardItem key={item.category} item={item} renderValue={renderValue} />
        ))}
      </ul>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </Card>
  );
}

export default CardList;
