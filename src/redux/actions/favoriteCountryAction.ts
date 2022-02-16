import { ADD_FAVORITE_COUNTRY, REMOVE_FAVORITE_COUNTRY } from '../../constant';

export function addFavorite(payload: string) {
  return {
    type: ADD_FAVORITE_COUNTRY,
    payload: payload,
  };
}

export function removeFavorite(payload: string) {
  return {
    type: REMOVE_FAVORITE_COUNTRY,
    payload: payload,
  };
}
