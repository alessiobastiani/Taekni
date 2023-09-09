import React from 'react'
import logo from '../assets/logo.png'

const Home2 = () => {
  return (
    <div className='home2-container'>
        <p>"Estamos comprometidos a ser tu compañero en este camino, ayudándote a convertir tus ideas en experiencias asombrosas y dinámicas".</p>
        <div className='loguito '>
          <img className='log' src={logo} alt="Logo de desarrollos web" />
          <p>Tækni</p>
        </div>
    </div>
  )
}

export default Home2