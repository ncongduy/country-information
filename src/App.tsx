import { Routes, Route } from 'react-router-dom';

import AppContext from './contexts';
import AppHeader from './components/HeaderApp';
import HomePage from './pages/Home';
import CountryPage from './pages/Country';

function App() {
  return (
    <AppContext>
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryName" element={<CountryPage />} />
      </Routes>
    </AppContext>
  );
}

export default App;
