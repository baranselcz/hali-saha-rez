import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CitySelection from './pages/CitySelection';
import CityHalisahaList from './pages/CityHalisahaList';
import HalisahaDetails from './pages/HalisahaDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/city-selection" element={<CitySelection />} />
        <Route path="/city/:cityName" element={<CityHalisahaList />} />
        <Route path="/city/:cityName/halisaha/:halisahaName" element={<HalisahaDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


