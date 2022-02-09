import React from 'react';
import { useParams } from 'react-router-dom';

import CardList from './components/CardList';
import useCountry from '../../custom-hooks/useCountry';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function CountryPage(props) {
  const { countryName } = useParams();
  const [country, isLoading, error] = useCountry(countryName);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }

  return <CardList country={country} />;
}

export default CountryPage;
