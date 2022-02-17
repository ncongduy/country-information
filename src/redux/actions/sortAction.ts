import { SET_CURRENT_SORT, SET_SORT_DATA } from '../../constant';

export function setCurrentSort(payload: string) {
  return {
    type: SET_CURRENT_SORT,
    payload: payload,
  };
}

export function setSortData(payload: string) {
  return {
    type: SET_SORT_DATA,
    payload: payload,
  };
}
