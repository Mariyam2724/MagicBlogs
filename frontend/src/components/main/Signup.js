import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { Formik, Form, Field } from 'formik';
import { useFormik } from "formik";
import app_config from '../../config';
import Swal from 'sweetalert2';


const Signup = () => {

  const url = app_config.apiurl;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(url+'/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      console.log(res.status);

      if(res.status === 201){
        Swal.fire({
          icon : 'success',
          title : 'Success',
          text : 'Account Created!'
        });

        navigate('/user/addvideo');
      }

    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
      }

      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
  });

  

  return (

    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient overflow-hidden">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  "
          }}
        />


        
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                WELCOME <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  Create an account!
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">

                  <form onSubmit={formik.handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <label className="form-label" htmlFor="FirstName">
                            First name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                          />
                          {formik.errors.firstName && formik.touched.firstName && (
                            <div className="text-danger">{formik.errors.firstName}</div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="">
                        <label className="form-label" htmlFor="form3Example2">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                          />
                          {formik.errors.firstName && formik.touched.firstName && (
                            <div className="text-danger">{formik.errors.firstName}</div>
                          )}
                          
                        </div>
                      </div>
                    </div>
                    {/* Email input */}
                    <div className=" mb-4">
                    <label className="form-label" htmlFor="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.email && formik.touched.email && (
                        <div className="text-danger">{formik.errors.email}</div>
                      )}
                      
                    </div>
                    {/* Password input */}
                    <div className=" mb-4">
                    <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.password && formik.touched.password && (
                        <div className="text-danger">{formik.errors.password}</div>
                      )}
                      
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form2Example33"
                        defaultChecked=""
                      />
                      <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our website
                      </label>
                    </div>
                    {/* Submit button */}
                    
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      href="/user/userhome"
                    >
                      
          
                      Sign up
                     
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                    <NavLink className="nav-link" to="/user/userhome">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                      </NavLink>
                    </div>
                    <p className="mb-5 pb-lg-2 " style={{ color: "#393f81", display: "flex",
        alignItems: "center",
        justifyContent: "center", }}>
                        <NavLink className="nav-link" to="/user/signin">
                          Already have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Sign in here
                          </a></NavLink>
                      </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>

  )
}

export default Signup;