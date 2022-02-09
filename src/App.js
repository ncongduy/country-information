import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import CountryPage from './pages/Country';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:countryName" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
