import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        
        <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/edit/:id" element={<EditContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
