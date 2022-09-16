import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Formation from './components/Formation';
import Project from './components/Project';
import Habilidades from './components/Habilidades';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Formation/>
      <Project/>
      <Habilidades/>
      <Footer/>
    </>
  );
}

export default App;
