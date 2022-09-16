import React from 'react'

const Habilidades = () => {
    return (
    <div className='mx-[10%] my-[5%]'>
        <h1 className=' flex  items-center justify-center mb-8 text-white font-bold text-3xl'>Tecnologias</h1>
        <div className='flex justify-around h-[80%] bg-white p-4 rounded-xl shadow-lg '>
            <div className='flex items-center justify-center gap-4 lg:gap-8 ' >

                <div className='flex flex-col md:flex-row gap-2 '>
                    <div className='flex items-center'>
                        <div className='' >
                            <img className='max-w-[2rem]' src='https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>HTML</h1>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='' >
                            <img className='max-w-[2rem]' src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3.png' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>CSS</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 '>
                    <div className='flex items-center'>
                        <div className='' >
                            <img className='max-w-[2rem]' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>JS</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='' >
                            <img className='max-w-[2rem]' src='https://cdn.worldvectorlogo.com/logos/react-2.svg' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>React</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2'>
                    <div className='flex items-center'>
                        <div className='' >
                            <img className='max-w-[2rem]' src='https://www.kindpng.com/picc/m/11-118738_php-logo-png-circle-transparent-png.png' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>PHP</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='__rect' >
                            <img className='max-w-[2rem]' src='https://susysadmin.files.wordpress.com/2017/07/sql-logo.png' alt=''/>
                        </div>
                        <div className='ml-4'>
                            <h1 className='font-medium text-xs md:text-base'>SQL</h1>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>

  )
}

export default Habilidades