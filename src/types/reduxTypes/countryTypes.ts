import {
  FETCH_ONE_COUNTRY_START,
  FETCH_ONE_COUNTRY_SUCCESS,
  FETCH_ONE_COUNTRY_ERROR,
} from '../../constant';

export type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type Country = {
  altSpellings: string[];
  region: string;
  borders?: string[];
  currencies: Currencies;
  languages: {
    [key: string]: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  name: {
    common: string;
  };
};

// type for initialState
export type StateCountry = {
  data: Country[];
  error: string;
  isLoading: boolean;
};

// type for Action
export type CountryActionLoading = {
  type: typeof FETCH_ONE_COUNTRY_START;
};

export type CountryActionSuccess = {
  type: typeof FETCH_ONE_COUNTRY_SUCCESS;
  payload: Country;
};

export type CountryActionError = {
  type: typeof FETCH_ONE_COUNTRY_ERROR;
  payload: string;
};

export type ActionCountry = CountryActionLoading | CountryActionSuccess | CountryActionError;
