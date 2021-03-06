import {
  FETCH_ONE_COUNTRY_START,
  FETCH_ONE_COUNTRY_SUCCESS,
  FETCH_ONE_COUNTRY_ERROR,
} from '../../constant';
import type { StateCountry, ActionCountry } from '../../types';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const countryReducer = (state: StateCountry = initialState, action: ActionCountry): StateCountry => {
  switch (action.type) {
    case FETCH_ONE_COUNTRY_START:
      return { ...state, isLoading: true };

    case FETCH_ONE_COUNTRY_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
        error: '',
      };

    case FETCH_ONE_COUNTRY_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default countryReducer;
