import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
// import Loading from "../main/Loading";
import "./VideoManager.css";
import { motion } from "framer-motion";

const ManageBlog = () => {
  const url = app_config.backend_url;
  const [blogArray, setBlogArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const [selBlog, setSelBlog] = useState(null);



  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/blog/getbyuserid/" + currentUser._id);
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      setBlogArray(data);
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);
  

  const deleteBlog = async (id) => {
    console.log(id);
    const response = await fetch(url + "/blog/deletebyid/" + id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Blog Deleted Successfully");
      getDataFromBackend();
    }
  };

  const displayBlog = () => {
    if (!loading) {
      return blogArray.map(({ _id, title, description, thumbnail }, index) => (
        <div className="col-md-3 mt-4" key={_id}>
            <div
              className="thumb-small"
              style={{ backgroundImage: `url('${thumbnail ?url + "/" + thumbnail: 'blog-placeholder.png'}')` }}
            >
              <div className="p-3 thumb-options">
                {/* <h5 className="card-title">{title}</h5>
              <p className="text-muted">{description}</p> */}
                <Link to={"/user/viewvideo/" + _id}>
                  <button className="btn btn-primary btn-floating">
                    <i class="fas fa-eye "></i>
                  </button>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger btn-floating"
                  onClick={(e) => deleteBlog(_id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                
              </div>

              <p className="h3 text-muted ms-3">{title}</p>
            </div>
          
        </div>
      ));
    } else {
      return (
        <div className="text-center">
          {/* <Loading></Loading> */}
          <h1>Loading ...</h1>
        </div>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "keyframes" }}
      className="vid-manage-bg"
    >
      <section className="header-top">
        {/* <i class="fas fa-paperclip header-text"></i> */}
      <h1 className="header-text">Manage Your Blogs</h1>
      </section>
      <section>
        
        <div>
          <h3 className="text-center mt-4">All Blogs</h3>
        </div>
      </section>
      <section>
        <div className="col-md-10 mx-auto">
          <div className="row mt-3 mb-5">
          <div className="col-md-3 mt-4">
            <Link to="/user/addvideo">
          <div className="card h-100">
            <div className="card-body">
              <motion.img whileHover={{ scale: 1.3 }} transition={{type: 'spring'}} style={{display: 'block', margin: 'auto', height: 150}} src="https://lordicon.com/upload/icons/2022_02/z31mkGzma.gif" alt="" />
            </div>
            </div>
            </Link>
            </div>
            {displayBlog()}
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ManageBlog;
