import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Header = () => {

  const {loggedIn, setLoggedIn, logout} = useUserContext();

  const showLoginOptions = () => {
    if(!loggedIn){
      return (
        <>
          <li className="nav-item me-2">
              <NavLink className="btn btn-outline-white" to="/main/signup">
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-white" to="/main/signin">
                Signin
              </NavLink>
            </li>
        </>
      )
    }else{
      return (
        <>
        <li className="nav-item me-2">
              <NavLink className="btn btn-outline-white" to="/user/profile">
                User Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger" onClick={logout}>
                Logout
              </button>
            </li>
        </>
      )
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="http://localhost:3000/main/home">
          
              
                
             
            <img
              src="https://www.shutterstock.com/image-vector/video-blog-player-interface-icon-260nw-435992056.jpg"
              height={70}
              alt="Logo"
              loading="lazy"
            />
            
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/aboutus">
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
              {showLoginOptions()}
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Header;
