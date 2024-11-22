import React from 'react';
import { useNavigate } from 'react-router-dom';

const CitySelection = () => {
  const navigate = useNavigate();

  
  const cities = ['Mersin', 'Adana'];

  const handleCitySelect = (city) => {
    navigate(`/city/${city}`); 
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Şehir Seçim Sayfası</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {cities.map((city, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <button
              onClick={() => handleCitySelect(city)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitySelection;



