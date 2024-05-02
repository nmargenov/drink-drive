import './App.css';
import { AboutUs } from './components/AbousUs/AboutUs';
import { Area } from './components/Area/Area';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { Price } from './components/Price/Price';
import { Work } from './components/Work/Work';

function App(){
  return(
      <>
        <Header/>
        <Work/>
        <AboutUs/>
        <Price/>
        <Form/>
        <Area/>
        <Footer/>
      </>
);
}

export default App;
