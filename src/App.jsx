import React, { useState } from 'react';
import './App.css';

import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';

function App() {
  const [vista, setVista] = useState('home');

  const renderVista = () => {
    switch (vista) {
      case 'home':
        return <Home />;
      case 'quienes':
        return <QuienesSomos />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="menu">
        <h1>Raíz del Maule </h1>
        <ul>
          <li onClick={() => setVista('home')}>Home</li>
          <li onClick={() => setVista('quienes')}>Quiénes Somos</li>
          <li onClick={() => setVista('servicios')}>Servicios</li>
          <li onClick={() => setVista('contacto')}>Contacto</li>
        </ul>
      </nav>
      <main>{renderVista()}</main>
    </div>
  );
}

export default App;
