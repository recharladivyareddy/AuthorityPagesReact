
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Authority from './components/Authority';
import Listrc from './components/Listrc';
import Listlic from './components/Listlic';
import Listper from './components/Listper';
import Reports from './components/Reports';
import Footer from './components/Footer';
import Header from './components/Header';
import Rcform from './components/Rcform';
import Licform from './components/Licform';
import Perform from './components/Perform';
function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
      <Route path='/' element={<Authority/>}></Route>
      <Route path='Listrc' element={<Listrc/>}></Route>
      <Route path='Listlic' element={<Listlic/>}></Route>
      <Route path='Listper' element={<Listper/>}></Route>
      <Route path='Reports' element={<Reports/>}></Route>
      <Route path='Rcform' element={<Rcform/>}></Route>
      <Route path='Licform' element={<Licform/>}></Route>
      <Route path='Perform' element={<Perform/>}></Route>
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;


