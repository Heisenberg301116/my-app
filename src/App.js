import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("Light")
  const [colour, setColour] = useState("white")
  const [myalert, setmyalert] = useState(null)

  const Show_Alert = (type, message) => {
    setmyalert({
      message: message,
      type: type
    })

    setTimeout(() => {    // After 2s, the alert popup will vanish 
      setmyalert(null)
    }, 2000)
  }

  const ToggleMode = () => {
    if (mode == "Light") {
      setMode("Dark")
      setColour("black")
      document.body.style.backgroundColor = "rgb(45,55,55)"
      Show_Alert('success', "Dark mode has been enabled")
    }
    else {
      setMode("Light")
      setColour("white")
      document.body.style.backgroundColor = "white"
      Show_Alert('success', "Light mode has been enabled")
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar title="My first Project" color={colour} arg1="Home" arg2="About" toggle_funct={ToggleMode} />

      <Alert obj={myalert} />

      <div className="container my-3">
        {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" exactelement={ */}
        <TextForm heading="Enter the text to analyze" color={colour} alert_fun={Show_Alert} />} />
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;