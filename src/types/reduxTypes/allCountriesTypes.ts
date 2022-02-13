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
};

//
// type for reducer
//
export type StateAllCountries = {
  data: Countries[];
  error: string;
  isLoading: boolean;
};

export type ActionAllCountries = {
  type: string;
  payload?: string | Countries[];
};

//
// type for action
//
export type CountriesActionLoading = {
  type: string;
};

export type CountriesActionSuccess = {
  type: string;
  payload: Countries[];
};

export type CountriesActionError = {
  type: string;
  payload: string;
};

//
// type for dispatch
//
export type CountriesDispatchType =
  | CountriesActionLoading
  | CountriesActionSuccess
  | CountriesActionError;
