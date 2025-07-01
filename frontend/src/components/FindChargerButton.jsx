// components/FindChargerButton.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fetchNearestStation } from '../api/stations';

function FindChargerButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');
    try {
      const stations = await fetchNearestStation();
      if (stations.length > 0) {
        alert(`Found: ${stations[0].name} (lat: ${stations[0].lat}, lng: ${stations[0].lng})`);
      } else {
        alert('No stations found.');
      }
    } catch (err) {
      setError('Error fetching stations. Try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button whileTap={{ scale: 0.95 }} onClick={handleClick} disabled={loading}>
        {loading ? 'Finding...' : 'Find Charger'}
      </motion.button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
}

export default FindChargerButton;
