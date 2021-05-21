import './App.css';

//Importar componente navbar
import {Navbar} from './components/Navbar'
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <Footer/>
    </div>
  );
}

export default App;
