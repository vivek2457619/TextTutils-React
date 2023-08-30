
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// Router
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // To check whether dark mode is enabled or not

  const [alert, setAlert] = useState(null); // To show different alert messages

  const showAlert = (message, type) => {
    setAlert( {
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#423f3f';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => { //title will change(flash). (bad user experience)
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }


  return (
    <>
    {/* <Router>  */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}  changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
<Alert alert={alert}/>

{/* for default props  */}
{/* <Navbar /> */}

<div className="container my-3">
{/* <Routes>  */}
  {/* <Route exact path='/' element={ */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
  {/*  }></Route> */}
  
  {/* <Route exact path="/about" element={<About/>}></Route> */}
{/*  </Routes> */}
</div>
 {/* </Router> */}
    </>

  ); //so that JS will not put ; by itself
  
}

export default App;
