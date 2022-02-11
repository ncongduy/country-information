const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ONE_COUNTRY_START':
      return { ...state, isLoading: true };
    case 'FETCH_ONE_COUNTRY_SUCCESS':
      return { ...state, data: [...state.data, action.payload], isLoading: false, error: null };
    case 'FETCH_ONE_COUNTRY_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default countryReducer;
