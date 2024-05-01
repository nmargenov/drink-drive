import './App.css';
import { AboutUs } from './components/AbousUs/AboutUs';
import { Header } from './components/Header/Header';
import { Work } from './components/Work/Work';

function App(){
  return(
      <>
        <Header/>
        <AboutUs/>
        <Work/>
      </>
);
}

export default App;
