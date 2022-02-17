import { SET_CURRENT_SORT, SET_SORT_DATA } from '../../constant';
import type { SortState, SortAction } from '../../types';

const initialState = {
  currentSort: 'name' as 'name',
  sortData: 'asc' as 'asc',
};

const sortReducer = (state: SortState = initialState, action: SortAction): SortState => {
  switch (action.type) {
    case SET_CURRENT_SORT:
      return { ...state, currentSort: action.payload };

    case SET_SORT_DATA:
      return { ...state, sortData: action.payload };

    default:
      return state;
  }
};

export default sortReducer;
