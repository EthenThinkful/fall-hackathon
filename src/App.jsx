import React from 'react';
import './App.css';
import { Route, Routes, useRoutes } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import NavBar from './NavBar/NavBar';
import DropdownMenu from './Search/Search';
import Dashboard from './Dashboard/Dashboard';
import { useState } from 'react';
import Search from './Search/Search';
import CoursesList from './Course/CoursesList';
import UserProfile from './UserProfile/UserProfile';
import { runPromt } from './OpenAi/OpenAi';

function App() {

  // Define state variables for the NavBar & Search
  const [searchResults, setSearchResults] = useState('');
  const [toBeSearched, setToBeSearched] = useState('');

  // Define a custom function to handle sending the prompt to OpenAI
  const handleSend = async () => {
    const res = await runPromt();
    console.log(res);
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
        />
      );
    }
    // If the path is "/", don't render the NavBar
    return null;
  }

  // Define a variable to store the route elements
  const element = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/search", element: <Search searchResults={searchResults} setSearchResults={setSearchResults} toBeSearched={toBeSearched} setToBeSearched={setToBeSearched} /> },
    { path: "/dashboard", element: <Dashboard handleSend={handleSend} /> },
    { path: "/course", element: <CoursesList /> },
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
