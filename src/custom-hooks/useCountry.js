// This hook is used to fetch one specific country
import { useEffect, useState } from 'react';

import fetchData from './fechApi';

function useCountry(nameCountry) {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchData.searchCountry(nameCountry);
      setCountry(data);
      setIsLoading(false);
    })();
  }, [nameCountry]);

  return [country, isLoading];
}

export default useCountry;
