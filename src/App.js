
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
{/*import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";*/}

function App() {
  const [alert,setAlert]=useState(null);
   
  const showAlert =(message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=> {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    } 
  }
  return (
    <>
    {/*<BrowserRouter>*/}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" mode={mode}>
      {/*<Routes>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze bellow"/>}/>
      </Routes>*/}
      <Textform showAlert={showAlert} heading="Enter the text to analyze bellow" mode={mode}/>
    </div>
    {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
