import { FavoriteCountryState, FavoriteAction } from '../../types';
import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';
import { TOGGLE_DISPLAY_COUNTRY } from '../../constant';

const initialState = {
  favorite: [],
  display: false,
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
      const newFavorite = copyFavorite.filter((countryName) => countryName.name !== action.payload.name);
      return { ...state, favorite: newFavorite };

    case TOGGLE_DISPLAY_COUNTRY:
      return { ...state, display: action.payload };

    default:
      return state;
  }
};

export default favoriteCountryReducer;
