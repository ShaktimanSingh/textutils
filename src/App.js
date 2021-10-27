import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled.", "success")
    }
    else if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      {/* <Router> */}
      <Navbar navTitle="TextUtils" mode={mode} toggleMode={toggleMode} disabledLink="Disabled Link" />
      <div className="container">
        <Alert alert={alert} />
        {/* <Switch> */}
        {/* <Route path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route path="/"> */}
        <TextForm heading="This is the heading" showAlert={showAlert} mode={mode} />
        {/* </Route> */}
        {/*  </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
