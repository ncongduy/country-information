import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export type ThemeContextType = {
  toggleColorMode: () => void;
  countryName?: string;
  setNameCountry: (name?: string) => void;
};

export const ThemeModeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
  countryName: '',
  setNameCountry: () => {},
});

export default function ThemeContext({ children }: any) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [countryName, setCountryName] = useState<string | undefined>('');

  const themeMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      countryName,
      setNameCountry: (name?: string) => setCountryName(name),
    }),
    [countryName]
  );

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
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
