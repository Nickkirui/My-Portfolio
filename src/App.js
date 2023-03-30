import About from './Components/about';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/NavBar';
import Skills from './Components/Skills';
import Work from './Components/Work';
import data from './data/data'
import './App.css';

function App() {
  return (
    <div className="App">
      <About/>
      <Contact/>
      <Home/>
      <Navbar/>
      <Skills/>
      <Work/>
     
    </div>
  );
}

export default App;
