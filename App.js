import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About.js';
import { useState } from 'react';
import Alert from './Components/Alert.js';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, typ) => {
    setAlert(
      {
        msg: message,
        type: typ
      })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'rgb(47 62 79)'; //'#042743'
      showAlert('Mode is Dark now', 'success')
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Mode is Light now', 'success')
    }
  }
  return (
    <Router>
      <Navbar title='Word Counter' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={
          <>
            <div className="container my-2">
              <TextForm mode={mode} showAlert={showAlert} />
            </div>
          </>
        } />
        <Route exact path='/about' element={
          <About  mode={mode} />
        } />
      </Routes>
      <Footer />

    </Router >
  );
}

export default App;
