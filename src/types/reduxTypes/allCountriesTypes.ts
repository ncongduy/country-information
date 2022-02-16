import {
  FETCH_ALL_COUNTRIES_START,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_ERROR,
} from '../../constant';

export type Countries = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  favorite: string;
};

// type for initialState
export type StateAllCountries = {
  data: Countries[];
  error: string;
  isLoading: boolean;
};

// type for action
export type CountriesActionLoading = {
  type: typeof FETCH_ALL_COUNTRIES_START;
};

export type CountriesActionSuccess = {
  type: typeof FETCH_ALL_COUNTRIES_SUCCESS;
  payload: Countries[];
};

export type CountriesActionError = {
  type: typeof FETCH_ALL_COUNTRIES_ERROR;
  payload: string;
};

export type ActionAllCountries = CountriesActionLoading | CountriesActionSuccess | CountriesActionError;
