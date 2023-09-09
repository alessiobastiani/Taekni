import React from 'react'
import logoo from '../assets/logo.png'
const Footer = () => {
    const instagramLink = 'https://www.instagram.com/desarrollotaekni/';
    const facebookLink = 'https://www.facebook.com/profile.php?id=61550223431055';
    const twitterLink = 'https://twitter.com/BastianiAlessio';
    const githubLink = 'https://github.com/alessiobastiani';
  return (
    <div className='contenedor-footer d-flex'>
        <div className='redes d-flex'>
            <div className="parent">
            <div className="child child-1">
  <a href={instagramLink} target="_blank" rel="noopener noreferrer">
    <button className="buttonf btn-1">
      <ion-icon name="logo-instagram"></ion-icon>
    </button>
  </a>
</div>
<div className="child child-2">
  <a href={facebookLink} target="_blank" rel="noopener noreferrer">
    <button className="buttonf btn-2">
      <ion-icon name="logo-facebook"></ion-icon>
    </button>
  </a>
</div>
<div className="child child-3">
  <a href={twitterLink} target="_blank" rel="noopener noreferrer">
    <button className="buttonf btn-3">
      <ion-icon name="logo-twitter"></ion-icon>
    </button>
  </a>
</div>
<div className="child child-4">
  <a href={githubLink} target="_blank" rel="noopener noreferrer">
    <button className="buttonf btn-4">
      <ion-icon name="logo-github"></ion-icon>
    </button>
  </a>
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