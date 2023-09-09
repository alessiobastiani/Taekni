import React from 'react';

const AutoIncrementComponent = ()=>{
  return (
    <div className='fondo-proyect'>
        <div className='proyect'>
            <ion-icon name="code-working-outline"></ion-icon>
            <p>10</p>
            <p>Proyectos realizados</p>
        </div>
        <div className='proyect'>
            <ion-icon name="calendar-clear-outline"></ion-icon>
            <p>3</p>
            <p>Años de Experiencia</p>
        </div>
        <div className='proyect'>
            <ion-icon name="accessibility-outline"></ion-icon>
            <p>12</p>
            <p>Nuestros clientes</p>
        </div>
    </div>
  );
};

export default AutoIncrementComponent;

