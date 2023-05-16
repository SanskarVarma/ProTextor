import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// }
// //  from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type,
        Color:'green'
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f5e8c4';
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar  title="ProTextor" style={{color:'black'}} mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Transformation is done here 👇" mode={mode}/>
    </div>
    <Footer/>
       
    {/* </Router> */}
    </> 
  );
}

export default App;


// text colour--#C09E02