import React from 'react';
import { useParams } from 'react-router-dom';

const HalisahaDetails = () => {
  const { cityName, halisahaName } = useParams(); // Dinamik parametreleri alıyoruz

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{halisahaName}</h1>
      <p>{cityName} şehrindeki {halisahaName} ile ilgili detaylar burada gösterilecek.</p>
    </div>
  );
};

export default HalisahaDetails;
