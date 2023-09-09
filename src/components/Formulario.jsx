import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_wfnty9t', 'template_t19eaok', form.current, 'djqZLWpfAZA70YlGp')
      .then((result) => {
        console.log(result.text);
        // Restablecer los valores del formulario después de un envío exitoso
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contacto' className='fomulariobg'>
      <form className="formulario" onSubmit={sendEmail} ref={form}>
        <h2>Contactanos</h2>
        <label>
          Nombre completo:
          <input
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          Teléfono:
          <input
            type="tel"
            name="tel"
            required
          />
        </label>
        <label>
          Asunto:
          <input
            type="text"
            name="Asunto"
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="mensaje"
          ></textarea>
        </label>
        <input type="hidden" name="_captcha" value="send" />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Formulario;
