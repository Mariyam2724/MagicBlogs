import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import app_config from '../../config';
import { useFormik } from "formik";


const AddVideo = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  
  const formik = useFormik({
    initialValues: {
      title: "",
      user: currentUser._id,
      file: ""
    },
    onSubmit: async (values) => {
      values.file = selFile;
      console.log(values);
      
      const res = await fetch(url+'/video/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);

    },
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.title) {
    //     errors.Title = "Title is required";
    //   } 
      
    //   if (!values.user) {
    //     errors.User = "User name is required";
    //   }
    //   if(!values.uploadVideo)
    //   return errors;
    // },
  });

  const url = app_config.apiurl;
  const [selFile, setSelFile] = useState("");

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };



  return (
    <section className="vh-100" style={{ backgroundColor: "skyblue" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-black mb-4">ADD VIDEO</h1>
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Title</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input type="text" className="form-control form-control-lg" 
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                        />
                        {formik.errors.title && formik.touched.title && (
                    <div className="text-danger">{formik.errors.title}</div>
                  )}
                  </div>
                </div>
                
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Upload Video</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      className="form-control form-control-lg"
                      id="uploadVideo"
                      onChange={uploadFile}
                      type="file" value={formik.values.uploadVideo}
                     
                      onBlur={formik.handleBlur}
                    />
                     {formik.errors.uploadVideo && formik.touched.uploadVideo && (
                <div className="text-danger">{formik.errors.uploadVideo}</div>
              )}

                    
                    <div className="small text-muted mt-2">
                      Upload your video or any other relevant video file.
                    </div>
                  </div>
                </div>

                <hr className="mx-n3" />
                <div className="px-5 py-4">
                  <button type="submit" className="btn btn-primary btn-lg">
                      Add Video
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AddVideo