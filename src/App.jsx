import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Search';
import Dashboard from './Dashboard/Dashboard';
import Search from './Search/Search';
import CoursesList from './Course/CoursesList';
import UserProfile from './UserProfile/UserProfile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/course" element={<CoursesList />} />
        <Route path="/profile" element={<UserProfile />} />
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
