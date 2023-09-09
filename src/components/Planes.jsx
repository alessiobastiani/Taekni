import React from 'react'
import Card from 'react-bootstrap/Card';
import target from '../assets/target.jpg'

const Planes = () => {
    // Function to open WhatsApp when the button is clicked
    const openWhatsApp = () => {
      // Replace '123456789' with your actual WhatsApp number
      const phoneNumber = '542804030980';
      const message = 'Hola, estoy interesado en tus servicios.';
  
      // Construct the WhatsApp URL
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
      // Open WhatsApp in a new tab/window
      window.open(whatsappURL, '_blank');
    };
  return (
    <div id='desarrollo' className='planes-contenedor'>
        <div className='text-title'>
        <h3>Selecciona el plan que mejor se ajuste a tus requerimientos</h3>
        <p>Una ves seleccionado nos podremos en contacto contigo</p>
        </div>
        <div className='contenedor-targetas d-flex '>
          <Card className="bg-dark text-light" style={{ width: '19rem' }}>
            <Card.Img variant="top" src={target} />
            <Card.Body>
              <Card.Title>Web Basica</Card.Title>
              <div className='price'>
                <p>AR$ Cotizar</p>
                <p>Atencion personalizada</p>
              </div>
              <Card.Text>
              Diseño de sitio web  ideal para pequeñas tiendas con la capacidad de mostrar varias imágenes divididas en secciones, enfocándose en la mejor optimización y seguridad.
              </Card.Text>
              <button className='button' onClick={openWhatsApp}>
                <span>Empezar</span><i></i>
              </button>
            </Card.Body>
          </Card>
          <Card className="bg-dark text-light card" style={{ width: '19rem' }}>
            <Card.Img variant="top" src={target} />
            <Card.Body className='body'>
              <Card.Title>Landing Page</Card.Title>
              <div className='price'>
                <p>AR$ Cotizar</p>
                <p>Atencion personalizada</p>
              </div>
              <Card.Text>
              Diseño de sitio web estático, perfecto para promocionar tu marca y atraer Muchos mas clientes a tu bolsa de trabajo, con un enfoque en la máxima optimización y seguridad.
              </Card.Text>
              <button className='button' onClick={openWhatsApp}>
                <span>Empezar</span><i></i>
              </button>
            </Card.Body>
          </Card>
        </div>
        <div className='cotizacion'>
          <h3>Ademas diseñamos y desarrollamos tu sitio como mas te guste, escribinos!!!</h3>
          <p><ion-icon name="call-outline"></ion-icon>+542804030980</p>
        </div>
    </div>
  )
}

export default Planes