//
// Fetch all countries
//
export function fetchALLCountriesByRedux() {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchAllCountriesStart());
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);
      const response = await fetchData.json();

      dispatch(fetchAllCountriesSuccess(response));
    } catch (error) {
      dispatch(fetchAllCountriesError(`${error}`));
    }
  };
}

export function fetchAllCountriesStart() {
  return {
    type: 'FETCH_ALL_COUNTRIES_START',
  };
}

export function fetchAllCountriesSuccess(payload) {
  return {
    type: 'FETCH_ALL_COUNTRIES_SUCCESS',
    payload: payload,
  };
}

export function fetchAllCountriesError(payload) {
  return {
    type: 'FETCH_ALL_COUNTRIES_ERROR',
    payload: payload,
  };
}

//
// Fetch one countries
//
export function fetchCountryByRedux(nameCountry) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchOneCountryStart());
      const fetchData = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);
      const response = await fetchData.json();

      dispatch(fetchOneCountrySuccess(response[0]));
    } catch (error) {
      dispatch(fetchOneCountryError(`${error}`));
    }
  };
}

export function fetchOneCountryStart() {
  return {
    type: 'FETCH_ONE_COUNTRY_START',
  };
}

export function fetchOneCountrySuccess(payload) {
  return {
    type: 'FETCH_ONE_COUNTRY_SUCCESS',
    payload: payload,
  };
}

export function fetchOneCountryError(payload) {
  return {
    type: 'FETCH_ONE_COUNTRY_ERROR',
    payload: payload,
  };
}
