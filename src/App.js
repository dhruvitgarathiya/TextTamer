import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // assuming you have Bootstrap installed
import TextForm from './Components/TextForm/TextForm';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
  <Navbar title="textutill"  aboutText="aboutus"/>
  <div className='container my-3'> 
    < TextForm  heading="Enter the text to analyze"/>
  </div> 
 
    </> 
    
  );
}

export default App;