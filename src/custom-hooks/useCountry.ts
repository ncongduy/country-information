// This hook is used to fetch one specific country
import { useEffect, useState } from 'react';

import fetchData from './fechApi';
import type { Country } from '../types';

type UseCountryState = Partial<Country>;

function useCountry(nameCountry: string) {
  const [country, setCountry] = useState<UseCountryState>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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

export { useCountry };
