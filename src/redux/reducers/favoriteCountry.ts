import { FavoriteCountryState, FavoriteAction } from '../../types';
import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';

const initialState = {
  favorite: [],
};

const favoriteCountryReducer = (
  state: FavoriteCountryState = initialState,
  action: FavoriteAction
): FavoriteCountryState => {
  switch (action.type) {
    case ADD_FAVORITE_COUNTRY:
      return { ...state, favorite: [...state.favorite, action.payload] };

    case REMOVE_FAVORITE_COUNTRY:
      const copyFavorite = [...state.favorite];
      const newFavorite = copyFavorite.filter((countryName) => countryName !== action.payload);
      return { ...state, favorite: newFavorite };

    default:
      return state;
  }
};

export default favoriteCountryReducer;
