import { combineReducers } from 'redux';

import allCountriesReducer from './allCountriesReducer';
import countryReducer from './countryReducer';
import favoriteCountryReducer from './favoriteCountry';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
  countries: allCountriesReducer,
  country: countryReducer,
  favorite: favoriteCountryReducer,
  sort: sortReducer,
});

export default rootReducer;
