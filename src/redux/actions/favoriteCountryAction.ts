import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';
import { TOGGLE_DISPLAY_COUNTRY } from '../../constant';

import type { RowTbBody } from '../../types';

export function addFavorite(payload: RowTbBody) {
  return {
    type: ADD_FAVORITE_COUNTRY,
    payload: payload,
  };
}

export function removeFavorite(payload: RowTbBody) {
  return {
    type: REMOVE_FAVORITE_COUNTRY,
    payload: payload,
  };
}

export function toggleDisplay(payload: boolean) {
  return {
    type: TOGGLE_DISPLAY_COUNTRY,
    payload: payload,
  };
}
