const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const allCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_COUNTRIES_START':
      return { ...state, isLoading: true };
    case 'FETCH_ALL_COUNTRIES_SUCCESS':
      return { ...state, data: action.payload, isLoading: false, error: null };
    case 'FETCH_ALL_COUNTRIES_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default allCountriesReducer;
