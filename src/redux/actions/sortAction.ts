import { SET_CURRENT_SORT, SET_SORT_DATA } from '../../constant';
import { CategorySort, SortType } from '../../types';

export function setCurrentSort(payload: CategorySort) {
  return {
    type: SET_CURRENT_SORT,
    payload: payload,
  };
}

export function setSortData(payload: SortType) {
  return {
    type: SET_SORT_DATA,
    payload: payload,
  };
}
