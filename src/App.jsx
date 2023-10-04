import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Search';
import Dashboard from './Dashboard/Dashboard';
import { useState } from 'react';
import Search from './Search/Search';
import CoursesList from './Course/CoursesList';
import UserProfile from './UserProfile/UserProfile';
import {runPromt} from './OpenAi/OpenAi';



function App() {

  const [searchResults, setSearchResults] = useState('');
  const [toBeSearched, setToBeSearched] = useState('');

  const handleSend = async () => {
    const res = await runPromt();
    console.log(res);
  }
  
  return (
    <>
    <NavBar searchResults={searchResults} setSearchResults={setSearchResults} toBeSearched={toBeSearched} setToBeSearched={setToBeSearched}/>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/search" element={<Search searchResults={searchResults} setSearchResults={setSearchResults} toBeSearched={toBeSearched} setToBeSearched={setToBeSearched}/>} />
        <Route path="/dashboard" element={<Dashboard handleSend={handleSend}/>} />
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
