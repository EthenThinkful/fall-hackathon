import React from 'react';
import './App.css';
import { Route, Routes, useRoutes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Search';
import Dashboard from './Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import Search from './Search/Search';
import SingleCourse from './SingleCourse/SingleCourse';
import UserProfile from './UserProfile/UserProfile';
import AllCourses from './AllCourses/AllCourses';
import MyCourses from './MyCourses/MyCourses';
import LandingPage from './LandingPage/LandingPage';
import { runPromt } from './OpenAi/OpenAi';
import { searchObjects } from './OpenAi/Algorithm';
import users from "./users.js";
const data = require('./data');

function App() {

  // Define state variables for the NavBar & Search
  const [searchResults, setSearchResults] = useState('');
  const [toBeSearched, setToBeSearched] = useState('');
  const [quote, setQuote] = useState(false);
  const [algorithmResponse, setAlgorithmResponse] = useState([]);
  const [dummy, setDummy] = useState(false);
  const [email, setEmail] = useState('');
  const [aiArray, setAiArray] = useState([]);

  // OpenAI API helper function
  function conv(x) {
    return x.match(/'([^']+)'/g)?.map(match => match.slice(1, -1)) || [];
  }

  // OpenAI API call
  const handleSend = async () => {
    const res = await runPromt(searchResults);
    console.log(res);
    const resTwo = conv(res);
    setAiArray(resTwo);
    console.log("resTwo: ", resTwo);
    const result = searchObjects(data, resTwo);
    console.log(searchObjects(data, resTwo));
    setAlgorithmResponse(result)
    return result;
  }

  // Define a variable to store the current path
  const path = window.location.pathname;

  // Define a custom function to conditionally render the NavBar
  function ConditionalNavBar(path) {
    // Check if the current path is not "/"
    if (path !== "/") {
      return (
        <NavBar
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          toBeSearched={toBeSearched}
          setToBeSearched={setToBeSearched}
          handleSend={handleSend}
        />
      );
    }
    // If the path is "/", don't render the NavBar
    return null;
  }

  // Define a variable to store the route elements
  const element = useRoutes([
    { path: "/", element: <LandingPage quote={quote} setQuote={setQuote} email={email} setEmail={setEmail} users={users}/> },
    { path: "/search", element: <Search searchResults={searchResults} toBeSearched={toBeSearched} conv={conv}/> },
    { path: "/dashboard", element: <Dashboard email={email} users={users} conv={conv} data={data}/> },
    { path: "/allcourses", element: <AllCourses /> },
    { path: "/mycourses", element: <MyCourses /> },
    { path: "/course", element: <SingleCourse /> },
    { path: "/profile", element: <UserProfile /> },
  ]);

  return (
    <>
      {/* Render the conditional NavBar */}
      {ConditionalNavBar(path)}

      {/* Render the route elements */}
      {element}
    </>
  )
}

export default App;
