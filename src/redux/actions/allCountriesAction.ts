import type { Dispatch } from 'redux';
import type { Countries, CountriesDispatchType } from '../../types';

export function fetchALLCountriesByRedux() {
  return async (dispatch: Dispatch<CountriesDispatchType>) => {
    try {
      dispatch(fetchAllCountriesStart());
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);
      const response = await fetchData.json();

      dispatch(fetchAllCountriesSuccess(response));
    } catch (error) {
      dispatch(fetchAllCountriesError(`${error}`));
    }
  };
}

export function fetchAllCountriesStart() {
  return {
    type: 'FETCH_ALL_COUNTRIES_START',
  };
}

export function fetchAllCountriesSuccess(payload: Countries[]) {
  return {
    type: 'FETCH_ALL_COUNTRIES_SUCCESS',
    payload: payload,
  };
}

export function fetchAllCountriesError(payload: string) {
  return {
    type: 'FETCH_ALL_COUNTRIES_ERROR',
    payload: payload,
  };
}
