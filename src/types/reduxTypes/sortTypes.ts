import { SET_CURRENT_SORT, SET_SORT_DATA } from '../../constant';

// type for initialState
export type SortState = {
  currentSort: string;
  sortData: string;
};

// type for action
export type SetCurrentSort = {
  type: typeof SET_CURRENT_SORT;
  payload: string;
};

export type SetSortData = {
  type: typeof SET_SORT_DATA;
  payload: string;
};

export type SortAction = SetCurrentSort | SetSortData;
