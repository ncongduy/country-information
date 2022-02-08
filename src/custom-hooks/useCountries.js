// This hook is used to fetch all countries
import { useEffect, useState } from 'react';

import fetchData from './fechApi';

function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchData.getAllCountries();
      setCountries(data);
    })();
  }, []);

  return countries;
}

export default useCountries;
