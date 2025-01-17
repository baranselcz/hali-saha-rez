import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CityHalisahaList = () => {
  const { cityName } = useParams(); 
  const navigate = useNavigate();

  // Halı saha verisi (Her halı saha için daha fazla bilgi ekledik)
  const halisahaData = {
    Mersin: [
      { name: 'Vadi Halısaha', location: 'Merkez Mersin Üniversite İçi', phone: '551 854 78 12', price: '1960 TL/saat' },
      { name: 'Adonis Halısaha', location: 'Merkez Üniversite Caddesi', phone: '533 632 54 45', price: '1960 TL/saat' },
      { name: 'Karaca Halısaha', location: 'Merkez Üniversite Caddesi', phone: '521 450 85 65', price: '1960 TL/saat' },
    ],
    Adana: [
      { name: 'Park Arena Halısaha', location: 'Çukurova Huzurevleri Mahallesi', phone: '541 987 21 54', price: '1960 TL/saat' },
      { name: 'Olimpos Halısaha', location: 'Çukurova Kenan Evren Bulvarı', phone: '533 856 45 87', price: '1960 TL/saat' },
      { name: 'Mavi Bulvar Halısaha ', location: 'Seyhan Mavi Bulvar', phone: '555 852 19 03', price: '1960 TL/saat' },
    ],
  };

  const halisahalar = halisahaData[cityName] || [];

  const handleHalisahaSelect = (halisaha) => {
    navigate(`/city/${cityName}/halisaha/${halisaha.name}`, { state: halisaha });
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
                {halisaha.name}
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
