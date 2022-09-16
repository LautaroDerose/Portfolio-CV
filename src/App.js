import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Formation from './components/Formation';
import Project from './components/Project';
import Habilidades from './components/Habilidades';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>  
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/formation' element={<Formation/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/tech' element={<Habilidades/>} />
          <Route path='/contact' element={<Footer/>}/>        
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
