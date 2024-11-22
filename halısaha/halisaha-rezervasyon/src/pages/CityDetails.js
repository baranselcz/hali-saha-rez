import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = () => {
  const { cityName } = useParams();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{cityName} Şehir Detayları</h1>
      <p>Bu sayfada {cityName} ile ilgili detaylar gösterilecektir.</p>
    </div>
  );
};

export default CityDetails;
