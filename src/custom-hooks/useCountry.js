// This hook is used to fetch one specific country
import { useEffect, useState } from 'react';

import fetchData from './fechApi';

function useCountry(nameCountry) {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchData.searchCountry(nameCountry);
      if (typeof data === 'string') {
        setError(data);
      } else {
        setCountry(data[0]);
      }
      setIsLoading(false);
    })();
  }, [nameCountry]);

  return [country, isLoading, error];
}

export default useCountry;
