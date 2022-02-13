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

// type for Reducer
export type StateCountry = {
  data: Country[];
  error: string;
  isLoading: boolean;
};

export type ActionCountry = {
  type: string;
  payload?: string | Country;
};

// type for Action
export type CountryActionLoading = {
  type: string;
};

export type CountryActionSuccess = {
  type: string;
  payload: Country;
};

export type CountryActionError = {
  type: string;
  payload: string;
};

// type for Dispatch
export type CountryDispatchType = CountryActionLoading | CountryActionSuccess | CountryActionError;
