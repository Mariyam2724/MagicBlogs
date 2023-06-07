import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import { useUserContext } from "../../context/UserProvider";

const Header = () => {
  const { loggedin, setLoggedin, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.apiurl;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
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
              alt="MDB Logo"
              loading="lazy"
            />
            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              {loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/main/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/main/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/addvideo">
                  AddVideos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/managevideo">
                  ManageVideos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/addaudio">
                  Add Audio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/manageaudio">
                  Manage Audios
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="border-rounded d-block m-auto"
                  src={currentUser.avatar ? `${url}/${currentUser.avatar}` : '/avatar.png'}
                  class="rounded-circle"
                  height="60"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <NavLink className="dropdown-item" to="/user/profile">
                    My profile
                  </NavLink>
                </li>

                <li>
                  <button onClick={logout} className="dropdown-item" href="#">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Header;
