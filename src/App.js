import './App.css';
import Navbar from './components/Navbar';  // Importing the Navbar component
import TextForm from './components/TextForm'; // Importing the TextForm component
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';  // Correct useState import
/*import { to reach other page like /about
  BrowserRouter as Router, // npm install react-router-dom
  Routes,
  Route
} from "react-router-dom";
used in div
Router> 
      <Navbar title="Testutils" mode={mode} toggleMode={toggleMode} about="test" />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes> 
          <Route path="/About" element= {<About/>}/>
          <Route path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}/>
        </Routes>
       </div>
    </Router>*/

function App() {
  
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
         setAlert(null);
    }, 3000);

  }

  const [mode, setMode] = useState('light');  // Ensure 'light' is a string
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'Textutils-Dark Mode'; //Jesy jesy apny functions ko click kry gy textutils ka tile automatic change
      //setInterval(() => {                   //This is not good approach
        //document.title= 'Textutils is amazing mode';
     // }, 2000);
      //setInterval(() => {
        //document.title= 'Instal Textutils now';
      //}, 1000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'Textutils-Light Mode'; //Jesy jesy apny functions ko click kry gy textutils ka tile automatic change
    }
  }
  return (
    <>
      <Navbar title="Testutils" mode={mode} toggleMode={toggleMode} about="test" />
      <Alert alert={alert}/>
      <div className="container my-3">
         <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
        <About/>
       </div>
    </>
  );
}

export default App;

