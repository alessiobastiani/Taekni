import React from 'react'
import logoo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='contenedor-footer d-flex'>
        <div className='redes d-flex'>

            <div className="parent">
<div className="child child-1">
  <button className="buttonf btn-1">
    <ion-icon name="logo-instagram"></ion-icon>
</button>
</div>
<div className="child child-2">
  <button className="buttonf btn-2">
  <ion-icon name="logo-facebook"></ion-icon>
</button>
</div>
<div className="child child-3">
  <button className="buttonf btn-3">
  <ion-icon name="logo-twitter"></ion-icon>
</button>
</div>
<div className="child child-4">
  <button className="buttonf btn-4">
  <ion-icon name="logo-github"></ion-icon>
</button>
</div>
</div>
        </div>
        <div className='logo'>
            <img src={logoo} alt="" />
            <p>Tækni</p>
        </div>
        <div className='direction'>
            <p>Celular: +542804030980</p>
            <p>Email: ale-ssio@hotmail.es</p>
            <p>Direccion: Puerto Madryn</p>
        </div>
    </div>
  )
}

export default Footer