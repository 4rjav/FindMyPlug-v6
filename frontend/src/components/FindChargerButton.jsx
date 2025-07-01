import React from 'react';
import { motion } from 'framer-motion';

function FindChargerButton() {
  const handleClick = () => {
    alert("Searching for nearest charging station...");
  };

  return (
    <motion.button whileTap={{ scale: 0.95 }} onClick={handleClick}>
      Find Charger
    </motion.button>
  );
}

export default FindChargerButton;