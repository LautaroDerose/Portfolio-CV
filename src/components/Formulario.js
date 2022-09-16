import React from 'react';
// import './Formulario.css'


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
      <div className='md:mx-[6%] my-8 max-w-[1240px]'>

        <form className=' justify-items-center rounded-md border-palette1 p-4 md:p-0 ' onSubmit={handleSubmit}>
          <div className='flex justify-center flex-wrap gap-4 '>
          <div className=' w-[100%] md:w-[45%]'>
            {/* <label htmlFor="name">Nombre del emisario</label> */}
            <input className='w-full mb-4 p-2 rounded-lg text-md text-palette1 bg-emerald-200'
              id="name"
              type="text" 
              name="name"
              placeholder='Nombre del emisario'
            />
            {/* <label htmlFor="email">Correo Electronico</label> */}
            <input className='w-full my-1 p-2 rounded-lg text-md text-palette1 bg-emerald-200'
              id="email"
              type="email" 
              name="email"
              placeholder='Correo Electronico'

            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            {/* <label htmlFor="subject">Asunto</label> */}
            <input className='w-full mt-4 p-2 rounded-lg text-md text-palette1 bg-emerald-200'
              id="subject"
              type="text" 
              name="subject"
              placeholder='Asunto'
            />
             {/* <button className=' bg-emerald-500 text-gray-900 font-medium w-full text-center rounded-md mt-4 py-3 ' type="submit" disabled={state.submitting} onClick={showAlert}>Enviar</button> */}
          </div>
          
          <div className=' w-[100%] md:w-[45%] '>
            <textarea className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-palette1 bg-emerald-200 resize-none'
            id="message"
            name="message"
            placeholder='Deje un mensaje :)'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          </div>
          <button className=' bg-emerald-500 text-gray-900 font-medium w-full md:w-[92%] text-center rounded-md py-3 ' type="submit" disabled={state.submitting} onClick={showAlert}>Enviar</button>
          </div>
          

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
