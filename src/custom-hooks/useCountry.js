// This hook is used to fetch one specific country
import { useEffect, useState } from 'react';

import fetchData from './fechApi';

function useCountry(nameCountry) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    (async () => {
      const data = await fetchData.searchCountry(nameCountry);
      setCountry(data);
    })();
  }, [nameCountry]);

  return country;
}

export default useCountry;
