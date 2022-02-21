import { useEffect, useMemo, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CardList from './components/CardList';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { fetchCountryByRedux } from '../../redux/actions';
import { ValueContext } from '../../contexts';

import type { RootState } from '../../redux/store';
import type { Country, ValueContextType } from '../../types';

function CountryPage() {
  const { countryName } = useParams();
  const { setNameCountry } = useContext<ValueContextType>(ValueContext);

  // use Redux to fetch API
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.country.isLoading);
  const data = useSelector((state: RootState) => state.country.data);
  const error = useSelector((state: RootState) => state.country.error);

  const dataCountry = useMemo(() => {
    const checkData = data.some((dt: Country): boolean => dt?.name?.common === countryName);
    if (!checkData) return {};
    return data.filter((dt: Country): boolean => dt?.name?.common === countryName)[0];
  }, [data, countryName]);

  // fetch API
  useEffect(() => {
    if (Object.keys(dataCountry).length !== 0) return;
    dispatch(fetchCountryByRedux(countryName as string));
  }, [countryName, dataCountry, dispatch]);

  // update country name in HeaderApp component
  useEffect(() => {
    if (typeof countryName === 'undefined') return;
    setNameCountry(countryName as string);
  }, [setNameCountry, countryName]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} />;
  }

  return <CardList country={dataCountry} />;
}

export default CountryPage;
