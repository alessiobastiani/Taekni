import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import Home2 from './components/Home2';
import Seccion3 from './components/Seccion3';
import Nosotros1 from './components/Nosotros1';
import Nosotros2 from './components/Nosotros2';
import Planes from './components/Planes';
import AutoIncrementComponent from './components/AutoIncrementComponent';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // Importa el componente WhatsAppButton
import Derechos from './components/Derechos';

function App() {
  return (
    <div className='app-container'>
      <Helmet>
        <title>Desarrollo web Puerto Madryn</title>
        <meta name="description" content="Desarrollo web profesional en puerto madryn. Programacion y mantenimiento de sitios web con la mejor calidad." />
      </Helmet>
      <div className='background-image'>
        <Navbar1 />
        <Home />
      </div>
      <div className='content-container'>
        <Home2 />
        <Seccion3 />
        <Nosotros1 />
        <Nosotros2 />
        <Planes />
        <AutoIncrementComponent />
        <Formulario />
        <Footer />
        <Derechos/>
      </div>
      <WhatsAppButton /> 
    </div>
  );
}

export default App;
