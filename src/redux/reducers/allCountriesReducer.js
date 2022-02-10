const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

const allCountriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES_START':
      return { ...state, isLoading: true };
    case 'FETCH_COUNTRIES_SUCCESS':
      return { ...state, data: action.payload, isLoading: false };
    case 'FETCH_COUNTRIES_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default allCountriesReducer;
