import React from 'react'
import celu from '../assets/celu.png'
const Seccion3 = () => {
  return (
    <div id='servicios' className='seccion-3 d-flex'>
        <img src={celu} alt="" />
        <div className='servicios'>
        <div className='dosServicios d-flex'>
          <div className='servicio'>
            <ion-icon  name="phone-portrait-outline"></ion-icon>
            <h3>Totalmente responsive</h3>
            <p>Adaptamos tu sitio a todos los dispositivos para que el usuario tenga la mejor experiencia.</p>
          </div>
          <div className='servicio'>
            <ion-icon  name="code-slash-outline"></ion-icon>
            <h3>Diseño web</h3>
            <p>Creamos tu sitio a tu gusto y te garantizamos que sea exclusiva.</p>
          </div>
        </div>
        <div className='dosServicios d-flex'>
          <div className='servicio'>
          <ion-icon   name="analytics-outline"></ion-icon>
            <h3>Posicionamiento Seo</h3>
            <p>Usamos todas las reglas de un buen Seo para que tu sitio pueda ser mejor apreciado en internet.</p>
          </div>
          <div className='servicio'>
          <ion-icon  name="build-outline"></ion-icon>
            <h3>Mantenimiento</h3>
            <p>Te brindamos un servicio de matenimiento para tu sitio para una mejor experiencia</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Seccion3