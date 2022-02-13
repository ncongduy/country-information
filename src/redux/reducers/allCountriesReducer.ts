import type { StateAllCountries, ActionAllCountries, Countries } from '../../types';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const allCountriesReducer = (
  state: StateAllCountries = initialState,
  action: ActionAllCountries
): StateAllCountries => {
  switch (action.type) {
    case 'FETCH_ALL_COUNTRIES_START':
      return { ...state, isLoading: true };
    case 'FETCH_ALL_COUNTRIES_SUCCESS':
      return { ...state, data: action.payload as Countries[], isLoading: false, error: '' };
    case 'FETCH_ALL_COUNTRIES_ERROR':
      return { ...state, error: action.payload as string, isLoading: false };
    default:
      return state;
  }
};

export default allCountriesReducer;
