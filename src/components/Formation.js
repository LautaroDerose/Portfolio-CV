import React from 'react'
import AbstractImage from  '../assets/formation_image.svg'


const Formation = () => {
  return (
    <div className='w-full py-8 px-4 static'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 md:pt-0 py-[1rem] md:mt-0 '>
            <img  className='w-[300px] md:w-[400px] mx-auto md:mt-16 pt-8 px-4 ' src={AbstractImage} alt="abstract-fondo"/>
            <div className='flex flex-col justify-center text-gray-100'>
                <h1 className='text-start mt-4 md:mt-16 uppercase text-emerald-500 font-bold text-xl mb-4'>formación</h1>
                <p> Estudiante avanzado en Diseño en Comunicación Visual por la <b>Universidad Nacional de La Plata</b>, Desde el 2019 comencé a formarme en  desarrollo web en <b>Digital House</b>, realizando el curso de “Programación web Full Stack” donde adquirí conocimientos en <b>HTML</b>, <b>CSS</b>, <b>php</b>, <b>MySQL</b>, <b>Laravel</b>, y <b>Bootstrap</b>. 
                <br/><br/>
                Entre el 2020 y 2022 desde que finalicé el curso a la actualidad, me dedique a terminar la cursada de mi carrera universitaria, al mismo tiempo que me mantuve aprendiendo de forma autodidacta y en la plataforma de <b>EdTeam</b> donde pude fortalecer y profundizar mis conocimientos en, <b>CSS</b> Y <b>Javascript</b>. 
                <br/><br/>
                En la actualidad, recientemente finalicé el curso de <b>React JS</b> en <b>CoderHouse</b>, y estoy en la búsqueda activa para obtener mi primer empleo como <b>Programador Frontend</b>.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Formation

