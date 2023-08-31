import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hader from "./Component/Hader";
import "./css/NavBar.css";
import "./css/responsive.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hader />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
