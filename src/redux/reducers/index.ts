import { combineReducers } from 'redux';
import allCountriesReducer from './allCountriesReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  countries: allCountriesReducer,
  country: countryReducer,
});

export default rootReducer;
