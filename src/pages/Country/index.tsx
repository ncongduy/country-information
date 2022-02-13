import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import useCountry from '../../custom-hooks/useCountry';
import CardList from './components/CardList';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { fetchCountryByRedux } from '../../redux/actions';

import type { RootStore } from '../../redux/store';
import type { Country } from '../../types';

function CountryPage() {
  const { countryName } = useParams();

  // use custom hooks to fetch API
  // const [country, isLoading, error] = useCountry(countryName);

  // use Redux to fetch API
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootStore) => state.country.isLoading);
  const data = useSelector((state: RootStore) => state.country.data);
  const error = useSelector((state: RootStore) => state.country.error);

  const checkData = useMemo(() => {
    return data.some((dt: Country): boolean => dt?.name?.common === countryName);
  }, [data, countryName]);

  const dataCountry = useMemo(() => {
    if (!checkData) return {};
    return data.filter((dt: Country): boolean => dt?.name?.common === countryName)[0];
  }, [data, countryName, checkData]);

  useEffect(() => {
    if (checkData) return;
    dispatch(fetchCountryByRedux(countryName as string));
  }, [countryName, dispatch, checkData]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }

  return <CardList country={dataCountry} />;
}

export default CountryPage;
