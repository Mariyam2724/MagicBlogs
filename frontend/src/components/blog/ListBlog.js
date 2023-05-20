import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";

function ListBlog() {
  const url = app_config.apiurl;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = app_config.apiurl;
    fetch(url + "/blog/getall")
      .then(async (response) => {
        console.log(response.status);
        // const data = await response.json();
        // console.log(data);
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!...";
  return (
    <section className="list-blog">
      <div className="container py-5">
        <h2 className="mt-4 mb-5">
          <strong>BLOGS</strong>
        </h2>
        <div className="row">
          {data.map((blog) => (
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div
                  className="blog-back"
                  style={{
                    backgroundImage: blog.image
                      ? `url("${url}/${blog.image}")`
                      : `url("blog-placeholder.png")`,
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title mb-3">{blog.title}</h5>
                  <p className="text-muted m-0">{blog.user.firstName} {blog.user.lastName}</p>
                  <h6 className="card-title mb-3">{blog.user.username}</h6>
                  {/* <p>Category</p> */}
                  <NavLink
                    to={"/blog/viewblog/" + blog._id}
                    className="btn btn-primary w-100"
                  >
                    {" "}
                    <i class="fas fa-eye"></i> View{" "}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListBlog;
