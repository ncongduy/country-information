import { combineReducers } from 'redux';

import allCountriesReducer from './allCountriesReducer';

const rootReducer = combineReducers({
  countries: allCountriesReducer,
});

export default rootReducer;
