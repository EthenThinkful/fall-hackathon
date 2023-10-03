import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Menu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<NavBar />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/home" element={<NavBar />} />
      </Routes>
    </>
  )
}

// import React from "react";
// import "./App.css";
// import {Route,Routes} from 'react-router-dom';
// function App() {
//   return (
//       
//       
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/create" element={<Create />} />
//         </Routes>
//     
//   );
// }

export default App;
