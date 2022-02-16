import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';

// type for initialState
export type FavoriteCountryState = {
  favorite: string[];
};

// type for action
export type AddFavoriteAction = {
  type: typeof ADD_FAVORITE_COUNTRY;
  payload: string;
};

export type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE_COUNTRY;
  payload: string;
};

export type FavoriteAction = AddFavoriteAction | RemoveFavoriteAction;
