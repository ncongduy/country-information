import type { Dispatch } from 'redux';
import type { Country, CountryDispatchType } from '../../types';

export function fetchCountryByRedux(nameCountry: string) {
  return async (dispatch: Dispatch<CountryDispatchType>) => {
    try {
      dispatch(fetchOneCountryStart());
      const fetchData = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);
      const response = await fetchData.json();

      dispatch(fetchOneCountrySuccess(response[0]));
    } catch (error) {
      dispatch(fetchOneCountryError(`${error}`));
    }
  };
}

export function fetchOneCountryStart() {
  return {
    type: 'FETCH_ONE_COUNTRY_START',
  };
}

export function fetchOneCountrySuccess(payload: Country[]) {
  return {
    type: 'FETCH_ONE_COUNTRY_SUCCESS',
    payload: payload,
  };
}

export function fetchOneCountryError(payload: string) {
  return {
    type: 'FETCH_ONE_COUNTRY_ERROR',
    payload: payload,
  };
}
