import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import type { ValueContextType } from '../types';

type Props = {
  children?: React.ReactNode;
};

export const ValueContext = createContext<ValueContextType>({
  toggleColorMode: () => {},
  countryName: '',
  setNameCountry: () => {},
});

export default function AppContext({ children }: Props) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [countryName, setCountryName] = useState<string | undefined>('');

  // create state value in ThemeModeContext
  const value = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      countryName,
      setNameCountry: (name?: string) => setCountryName(name),
    }),
    [countryName]
  );

  // create theme dark or light for UI
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ValueContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ValueContext.Provider>
  );
}
