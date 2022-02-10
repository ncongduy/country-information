export function fetchCountriesByRedux() {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchDataStart());
      const fetchData = await fetch(`https://restcountries.com/v3.1/all`);
      if (!fetchData.ok) throw new Error(`${fetchData.status} Can not fetch data`);
      const response = await fetchData.json();

      dispatch(fetchDataSuccess(response));
    } catch (error) {
      dispatch(fetchDataError(`${error}`));
    }
  };
}

export function fetchDataStart() {
  return {
    type: 'FETCH_COUNTRIES_START',
  };
}

export function fetchDataSuccess(payload) {
  return {
    type: 'FETCH_COUNTRIES_SUCCESS',
    payload: payload,
  };
}

export function fetchDataError(payload) {
  return {
    type: 'FETCH_COUNTRIES_ERROR',
    payload: payload,
  };
}
