import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // assuming you have Bootstrap installed
 import TextForm from './Components/TextForm/TextForm';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import { useState } from 'react';

function App() {
  const [mode , setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
     
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
  <Navbar title="textutill"  aboutText="aboutus" mode={mode} toggleMode= {toggleMode} />
  <div className='container my-3'>
    
  <TextForm  heading="Enter the text to analyze" mode={mode}/> 
   
    <About />
  </div> 
 
    </> 
    
  );
}

export default App;