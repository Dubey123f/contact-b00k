import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux Contact Book
        </Link>
      </nav>
    </div>
    <Outlet/>
    </>

  );
};

export default Navbar;
