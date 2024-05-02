import './App.css';
import { AboutUs } from './components/AbousUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Price } from './components/Price/Price';
import { Work } from './components/Work/Work';

function App(){
  return(
      <>
        <Header/>
        <AboutUs/>
        <Work/>
        <Price/>
        <Form/>
        <Footer/>
      </>
);
}

export default App;
