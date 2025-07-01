import React from 'react';
import Header from './components/Header';
import ModelSelector from './components/ModelSelector';
import LeafletMap from './components/LeafletMap';
import StationDisplay from './components/StationDisplay';
import FindChargerButton from './components/FindChargerButton';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ModelSelector />
      <FindChargerButton />
      <LeafletMap />
      <StationDisplay />
    </div>
  );
}

export default App;