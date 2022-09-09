import React from 'react';
import './Formulario.css'
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2';



function ContactForm() {
  const [state, handleSubmit] = useForm("xoqbjkbl");
  if (state.succeeded) {
      return <p>Gracias por contactarse!</p>;
  }

  const showAlert = () => {
     
    Swal.fire({
      title: '<strong>Gracias!</strong>',
      icon: 'success',
      html:
      'Estamos en contacto <b>:)</b><br/><br/> ' +
      'Tambien puedes contactarme en ' +
      '<a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/">LinkedIn</a><br/> ' +
      'O dejame un like en este ' +
      '<a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/">Post</a> ' ,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok!',
      confirmButtonAriaLabel: 'Thumbs up, great!'
    })
    // <button onClick={showAlert}>Prueba Sweet</button>
  }

  return (
      <div className='form__container'>
        

        <form className='form__content' onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del emisario</label>
        <input className='box'
          id="name"
          type="text" 
          name="name"
        />
        <label htmlFor="email">Correo Electronico</label>
        <input className='box'
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="subject">Asunto</label>
        <input className='box'
          id="subject"
          type="text" 
          name="subject"
        />
        <textarea className='input__comentario box'
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className='btn__general btn__form' type="submit" disabled={state.submitting} onClick={showAlert}>Enviar</button>
    </form>
      </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;



// import React from 'react'
// import './Formulario.css'

// const Formulario = () => {
//   return (
//     <section className='form__main'>
//         <div>
//             <div className='form__container'>
//                 <form className='form__content'>
//                     <input className='input__name box' type="text" name="name" placeholder="Escribe tu nombre" required />
//                     <input className='input__email box' type="email" name="email" placeholder="Escribe tu email" required />
//                     <input className='input__subject box' type="text" name="subjet" placeholder="Asunto a tratar" required />

//                     <textarea className='input__comentario box' name='comments' cols="50" rows="5" placeholder="Escribe tu comentario" required ></textarea>

//                     <input className='btn__general btn__form' type="submit" value="Enviar" />
//                 </form>
//             </div>
//         </div>
//     </section>
//   ) 
// }

// export default Formulario