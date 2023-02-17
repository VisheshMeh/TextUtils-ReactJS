import './App.css';
//import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState('null');
  const showAlert = (message, type) => {

  setAlert({
    msg : message,
    type : type

  })
   setTimeout(() => {
    setAlert('null');}
,1500);
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode enabled","success");
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled","success");
  } 
}
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className="container my-3">
    <Routes>
          <Route exact path="/about"
            element={<About />}/>
          
          <Route exact path="/"
          element={<Textform showAlert ={showAlert} heading ="Enter the text to analyze below" mode={mode} toggleMode={toggleMode}/>}/>
          
        </Routes>
    </div>
    </Router>
    </>

  );
}

export default App;