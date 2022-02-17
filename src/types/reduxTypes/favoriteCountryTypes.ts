import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';
import { TOGGLE_DISPLAY_COUNTRY } from '../../constant';

import type { RowTbBody } from '../../types';

// type for initialState
export type FavoriteCountryState = {
  favorite: RowTbBody[];
  display: boolean;
};

// type for action
export type AddFavoriteAction = {
  type: typeof ADD_FAVORITE_COUNTRY;
  payload: RowTbBody;
};

export type RemoveFavoriteAction = {
  type: typeof REMOVE_FAVORITE_COUNTRY;
  payload: RowTbBody;
};

export type ToggleDisplay = {
  type: typeof TOGGLE_DISPLAY_COUNTRY;
  payload: boolean;
};

export type FavoriteAction = AddFavoriteAction | RemoveFavoriteAction | ToggleDisplay;
