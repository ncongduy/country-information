import { SET_CURRENT_SORT, SET_SORT_DATA } from '../../constant';

export type CategorySort = 'name' | 'capital' | 'region' | 'population';
export type SortType = 'asc' | 'dsc';

// type for initialState
export type SortState = {
  categorySort: CategorySort;
  sortData: SortType;
};

// type for action
export type SetCurrentSort = {
  type: typeof SET_CURRENT_SORT;
  payload: CategorySort;
};

export type SetSortData = {
  type: typeof SET_SORT_DATA;
  payload: SortType;
};

export type SortAction = SetCurrentSort | SetSortData;
