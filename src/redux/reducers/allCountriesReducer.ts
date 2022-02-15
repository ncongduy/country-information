import {
  FETCH_ALL_COUNTRIES_START,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_ERROR,
} from '../../constant';
import type { StateAllCountries, ActionAllCountries } from '../../types';

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
    case FETCH_ALL_COUNTRIES_START:
      return { ...state, isLoading: true };

    case FETCH_ALL_COUNTRIES_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: '' };

    case FETCH_ALL_COUNTRIES_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default allCountriesReducer;
