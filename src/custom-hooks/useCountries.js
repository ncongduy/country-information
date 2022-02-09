// This hook is used to fetch all countries
import { useEffect, useState } from 'react';

import fetchData from './fechApi';

function useCountries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchData.getAllCountries();
      setCountries(data);
      setIsLoading(false);
    })();
  }, []);

  return [countries, isLoading];
}

export default useCountries;
