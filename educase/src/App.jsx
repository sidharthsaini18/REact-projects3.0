import React from "react";
import "./App.css";
import Master from "./components/master";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
