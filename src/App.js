import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("success","Dark mode has been enabled");
    }
    else {
      setMode('light');
      document.body.style.background='white';
      showAlert("success","Light mode has been enabled");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type,msg)=>{
    setAlert({
      type:type,
      message:": "+msg
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>   {/*navbar component*/}
      <Alert alert ={alert}/>
      {/* <img src={logo} className="App-logo mx-auto d-block" alt="logo" /> */}
      <div className="container my-3">
      <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
      <About mode={mode}/>
      </div>
    </>
    
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first React Project</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}