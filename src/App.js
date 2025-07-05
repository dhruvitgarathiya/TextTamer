import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // assuming you have Bootstrap installed
import TextForm from "./Components/TextForm/TextForm";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import { useState } from "react";
import Alert from "./Components/Alert/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      showAlert("Light mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Navbar
        title="TextTamer"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <TextForm heading="Enter the text to analyze" mode={mode} />
              }
            />
            <Route path="aboutus" element={<About mode={mode} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
