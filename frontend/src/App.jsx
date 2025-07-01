// App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ModelSelector from './components/ModelSelector';
import FindChargerButton from './components/FindChargerButton';

const LeafletMap = lazy(() => import('./components/LeafletMap'));
const StationDisplay = lazy(() => import('./components/StationDisplay'));

function HomePage() {
  return (
    <>
      <ModelSelector />
      <FindChargerButton />
      <Suspense fallback={<div>Loading map...</div>}>
        <LeafletMap />
      </Suspense>
      <Suspense fallback={<div>Loading stations...</div>}>
        <StationDisplay />
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
