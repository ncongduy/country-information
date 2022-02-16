import { combineReducers } from 'redux';

import allCountriesReducer from './allCountriesReducer';
import countryReducer from './countryReducer';
import favoriteCountryReducer from './favoriteCountry';

const rootReducer = combineReducers({
  countries: allCountriesReducer,
  country: countryReducer,
  favorite: favoriteCountryReducer,
});

export default rootReducer;
