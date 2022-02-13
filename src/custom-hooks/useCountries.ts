// This hook is used to fetch all countries
import { useEffect, useState } from 'react';

import fetchData from './fechApi';
import type { Countries } from '../types';

function useCountries() {
  const [countries, setCountries] = useState<Countries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetchData.getAllCountries();
      if (typeof data === 'string') {
        setError(data);
      } else {
        setCountries(data);
      }
      setIsLoading(false);
    })();
  }, []);

  return [countries, isLoading, error];
}

export { useCountries };
