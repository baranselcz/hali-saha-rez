import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CityHalisahaList = () => {
  const { cityName } = useParams(); 
  const navigate = useNavigate();

  
  const halisahaData = {
    Mersin: ['Vadi Halısaha ', 'Adonis Halısaha ', 'Karaca Halısaha '],
    Adana: ['Adana Halısaha 1', 'Adana Halısaha 2', 'Adana Halısaha 3'],
  };

  
  const halisahalar = halisahaData[cityName] || [];

  const handleHalisahaSelect = (halisaha) => {
    
    navigate(`/city/${cityName}/halisaha/${halisaha}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{cityName} Halı Sahaları</h1>
      {halisahalar.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {halisahalar.map((halisaha, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <button
                onClick={() => handleHalisahaSelect(halisaha)}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  cursor: 'pointer',
                }}
              >
                {halisaha}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bu şehirde halı saha bulunamadı.</p>
      )}
    </div>
  );
};

export default CityHalisahaList;
