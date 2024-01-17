import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:3000/";

import Waves from "./assets/Waves/Waves"
import Home from "./components/Home/Home.jsx"
import Td from "./components/Td/Td.jsx";
import PageLogo from "./assets/PageLogo/PageLogo.jsx";

function App() {

  return (
    <>
    <div className="app">
      <div className="toplogo">
      <PageLogo />
      </div>
      <div className="app_content">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/td" element={<Td/>}/>
         </Routes>
      </BrowserRouter>
      </div>
      <Waves/>
    </div>
    </>
  )
}

export default App
