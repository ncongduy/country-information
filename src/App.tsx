import { Routes, Route } from 'react-router-dom';

import ThemeContext from './contexts/ThemeContext';
import HeaderApp from './components/HeaderApp';
import HomePage from './pages/Home';
import CountryPage from './pages/Country';
import './App.css';

function App() {
  return (
    <div className="app">
      <ThemeContext>
        <HeaderApp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryName" element={<CountryPage />} />
        </Routes>
      </ThemeContext>
    </div>
  );
}

export default App;
