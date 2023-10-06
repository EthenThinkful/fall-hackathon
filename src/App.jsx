import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import LandingPage from './LandingPage/LandingPage';
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Search';
import Dashboard from './Dashboard/Dashboard';
import Search from './Search/Search';
import CoursesList from './AllCourses/CoursesList';
import UserProfile from './UserProfile/UserProfile';
import MyCourses from './Course/MyCourses';

function App() {
  const [quote, setQuote] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage quote={quote} setQuote={setQuote}/>} />
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/allcourses" element={<CoursesList />} />
        <Route path="/course" element={<MyCourses />} />
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
