import React, {  useEffect } from "react";
import { Button } from "@mui/material";
import { Formik } from "formik";
import {  useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import { useState } from "react"; 
import toast from "react-hot-toast";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";




const AddBlog = () => {
  const {id} = useParams();
  const url = app_config.apiurl;
  const [videoData, setVideoData] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldValues, setfieldValues] = useState("")
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [selBlog, setSelBlog] = useState("");
  const [blogData, setBlogData] = useState('');
  const navigate = useNavigate();

  const getDatafromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/video/getbyid/" + id);
    // console.log(response.status);
    if( response.status === 200){
    const data = (await response.json()).result;
    console.log(data);
    setBlogData(data.transcription)
    setVideoData(data);
    setfieldValues({
      title: data.title,
      description: data.description,
      text:data.transcription.text,
      category:"",
      createdAt:new Date(),
    })
    setLoading(false);
  }
};

const uploadBlog = (e) => {
  const file = e.target.files[0];
  setSelBlog(file.name);
  const fd = new FormData();
  fd.append("myfile", file);
  fetch("http://localhost:5000/util/uploadfile", {
    method: "POST",
    body: fd,
  }).then((res) => {
    if (res.status === 200) {
      toast.success("Image uploaded successfully");
      console.log("uploaded");
    }
  });
};

useEffect(() => {
  getDatafromBackend()
}, [])


const BlogSubmit = async (formdata) => {
  formdata.video = id;
  formdata.user = currentUser._id;
  formdata.image=selBlog;
  formdata.data = blogData
  const response = await fetch(url + "/blog/add", {
    method: "POST",
    body: JSON.stringify(formdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(response.status === 200){
    toast.success("Blog Added Successfully");
    navigate("/blog/listblog");
  }
};

  const DisplayBlogForm = () => {
    if(!loading){
    return (
      <div>
    <Formik
    initialValues={fieldValues}
    onSubmit={BlogSubmit}>

    {({ values, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="box">
            <div class=" mb-4">
              <label
                className="form-label"
                htmlFor="title"
                style={{ marginLeft: "0px" }}
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                class="form-control"
                name="title"
                required
              />
            </div>
          </div>

          <div className="box">
            <div className="mb-4">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={values.description}
                onChange={handleChange}
                className="form-control"
                name="description"
                required
              />
            </div>
          </div>
          <div className="box">
            <div class=" mb-4">
              <label
                className="form-label"
                htmlFor="category"
                style={{ marginLeft: "0px" }}
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                value={values.category}
                onChange={handleChange}
                class="form-control"
                name="category"
                required
              />
            </div>
          </div>
          <div className="box">
            <div class="mb-4">
              <label
                className="form-label"
                htmlFor="text"
                style={{ marginLeft: "0px" }}
              >
                Data
              </label>
              <SimpleMdeReact
                type="text"
                id="text"
                value={blogData}
                onChange={handleChange}
                class="form-control "
                required
                name="text">
                </SimpleMdeReact>
            </div>
          </div>
          <div className="box">
            <div class="mb-4">
              <label
                className="form-label"
                htmlFor="image"
                style={{ marginLeft: "0px" }}
              >
                Image
              </label>
              <input
                type="file" 
                id="image"
                onChange={uploadBlog}
                class="form-control"
                accept="image/*"
                required
                name="image">
                </input>
            </div>
          </div>
          <Button variant="contained" type="submit" className="sign w-100">
             Publish
          </Button>
        </div>
      </form>
    )}
  </Formik>
      </div>
    );
    }
  };


  return (
      <div className="container mt-5 ">
            <div className="card">
              <div className="card-header">
        <h2 className="text-center text-danger">Add Blogs</h2>
        <p className="text-center ">Please enter the details of blogs</p>
              </div>
              <div className="card-body">
            {DisplayBlogForm()}
              </div>
                
        </div>
            </div>
  );
};

export default AddBlog;

// arr3 = [3]
// for(int i=0;i<len;i++){
//   arr3[i] = arr1[i]+arr2[i]
// }

