import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar/>
      <div className=''>
      <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
