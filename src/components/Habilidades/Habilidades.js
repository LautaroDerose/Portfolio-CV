import React from 'react'
import './Habilidades.css'

const Habilidades = () => {
  return (
    <div className='habilidades__container'>
        <div className='habilidades__content'>
            <div className='habilidad__container'>
            
                <div className='icon__technology' >
                    <img src='https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>HTML</h1>
                </div>
            </div>
            <div className='habilidad__container'>
                <div className='icon__technology' >
                    <img src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3.png' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>CSS</h1>
                </div>
            </div>
            <div className='habilidad__container'>
                <div className='icon__technology__square' >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>JS</h1>
                </div>
            </div>
        
        
            <div className='habilidad__container'>
                <div className='icon__technology' >
                    <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>React JS</h1>
                </div>
            </div>
            <div className='habilidad__container'>
                <div className='icon__technology' >
                    <img src='https://www.kindpng.com/picc/m/11-118738_php-logo-png-circle-transparent-png.png' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>PHP</h1>
                </div>
            </div>
            <div className='habilidad__container'>
                <div className='icon__technology__rect' >
                    <img src='https://susysadmin.files.wordpress.com/2017/07/sql-logo.png' alt=''/>
                </div>
                <div className='habilidad__detail'>
                    <h1>SQL</h1>
                </div>
            </div>
        
        
        </div>
    </div>
  )
}

export default Habilidades