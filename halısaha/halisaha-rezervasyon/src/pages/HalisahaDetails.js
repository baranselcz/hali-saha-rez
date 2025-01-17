import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const HalisahaDetails = () => {
  const { halisahaName } = useParams();
  const location = useLocation();
  const halisaha = location.state;

  const [reservations, setReservations] = useState([]);
  const [reservation, setReservation] = useState({
    day: '',
    time: '',
  });

  const fixedYear = new Date().getFullYear(); // Güncel yıl
  const fixedMonth = 1; // Sabit ay (1 = Şubat)

  // Haftanın günleri
  const weekDays = [
    { name: 'Pazartesi', value: 1 },
    { name: 'Salı', value: 2 },
    { name: 'Çarşamba', value: 3 },
    { name: 'Perşembe', value: 4 },
    { name: 'Cuma', value: 5 },
    { name: 'Cumartesi', value: 6 },
    { name: 'Pazar', value: 0 },
  ];

  const availableTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservation = () => {
    if (reservation.day && reservation.time) {
      // Seçilen gün, yıl ve ay ile tam bir tarih oluştur
      const today = new Date();
      const todayDay = today.getDay(); // Bugün haftanın hangi günü
      const selectedWeekdayValue = parseInt(reservation.day, 10);

      // Seçilen günü tam tarihe çevir
      const dayDifference = (selectedWeekdayValue - todayDay + 7) % 7;
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + dayDifference);

      const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD formatı

      // Aynı tarih ve saat için kontrol
      const isDuplicate = reservations.some(
        (res) => res.date === formattedDate && res.time === reservation.time
      );

      if (isDuplicate) {
        alert('Bu tarih ve saat için zaten bir rezervasyon yapılmış.');
        return;
      }

      const newReservation = {
        halisahaName,
        date: formattedDate,
        time: reservation.time,
      };

      setReservations((prev) => [...prev, newReservation]);
      alert(`Rezervasyonunuz alındı: ${newReservation.date} - ${newReservation.time}`);
    } else {
      alert('Lütfen bir gün ve saat seçiniz.');
    }
  };

  if (!halisaha) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Halı Saha Detayları</h1>
        <p>Halı saha bilgisi bulunamadı. Lütfen tekrar deneyiniz.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{halisahaName}</h1>
      <p><strong>Konum:</strong> {halisaha.location}</p>
      <p><strong>Telefon:</strong> {halisaha.phone}</p>
      <p><strong>Fiyat:</strong> {halisaha.price}</p>

      <h2>Rezervasyon Yap</h2>
      <form style={{ display: 'inline-block', textAlign: 'left' }}>
        <label>
          Gün:
          <select
            name="day"
            value={reservation.day}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '5px' }}
          >
            <option value="">Gün seçin</option>
            {weekDays.map((day) => (
              <option key={day.value} value={day.value}>
                {day.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Saat:
          <select
            name="time"
            value={reservation.time}
            onChange={handleInputChange}
            style={{ margin: '10px', padding: '5px' }}
          >
            <option value="">Saat seçin</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button
          type="button"
          onClick={handleReservation}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Rezervasyon Yap
        </button>
      </form>

      <h2>Rezervasyonlar</h2>
      <ul>
        {reservations.map((res, index) => (
          <li key={index}>
            {res.date} - {res.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HalisahaDetails;
