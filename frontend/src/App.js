import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import Contact from "./components/main/Contact";
import About from "./components/main/About";
import AddVideo from "./components/user/AddVideo";
import ManageVideos from "./components/user/ManageVideos";
import Browse from "./components/user/Browse";
import BlogsList from "./components/main/BlogsList";
import Blog from "./components/blog";
import AddBlog from "./components/blog/AddBlog";
import VideoManager from "./components/user/VideoManager";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>
            
            
           

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
              <Route element={<About />} path="aboutus" />
              <Route element={<BlogsList/>} path="bloglist" />
            </Route>

            <Route
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
              path="user"
            >
              <Route path="profile" element={<UserProfile />} />
              <Route path="addvideo" element={<AddVideo />} />
              <Route path="managevideo" element={<VideoManager />} />
              <Route path="userhome" element={<Browse />} />
            </Route>
            
            <Route
              element={
                  <Blog />
              }
              path="blog"
            >
              <Route path="addblog/:id" element={<AddBlog />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
