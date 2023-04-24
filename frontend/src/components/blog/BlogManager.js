
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import app_config from "../../config";
// import Loading from "../main/Loading";
import "./BlogManager.css";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";


const BlogManager = () => {
  const url = app_config.backend_url;
  const [blogList, setBlogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))


  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/blog/getbyuserid/"+currentUser._id);
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setBlogList(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const deleteBlog = async (id) => {
    console.log(id);
    const response = await fetch(url + "/blog/delete/" + id, {
      method: "DELETE",
    });
    if (response.status === 200) {
      toast.success("Blog Deleted");
      getDataFromBackend();
    }
  };

  const displayBlog = () => {
    if (loading) {
      return (
        <div className="text-center ">
          {/* <Loading className="text-lg"/> */}
          <h1>Loading ...</h1>
        </div>
          
      );
    } else {
      return blogList.map(
        ({ _id, title, user:{name},image, createdAt }) => (
          <div className="col-md-4 mt-4">
          <div className="card">
            <div
              className="bg-div ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={url + "/" + image}
                className="img-fluid bg-image-blog"
              />
            </div>
            <div class="card-body">
              <div className="date float-end">
              &nbsp;{format(new Date(createdAt), "dd MMM yyyy")}
              </div>
              <h4 className="title mt-3">{title}</h4>
              <div className=" text-muted mt-2">By &nbsp;
              <span  className="text-muted author" to="">{name}  </span>
              <br/>
              <br/>
              </div>
              <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={e=>navigate('/blog/viewblog/'+_id)} >View</button>
              <button className="btn btn-danger float-end" onClick={e=>{deleteBlog(_id)}}>
                Delete
              </button>
              </div>
            </div>
          </div>
          </div>
        )
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "keyframes" }}
    >
      <section>
      <div className="d-flex justify-content-center align-items-center  blogheader ">
        <h1 className="text-light">
          Your All Blogs
      </h1>
        </div>
        <div>
          <h3 className="text-center mt-4">Latest Blogs</h3>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-3 mb-5">{displayBlog()}</div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogManager;
