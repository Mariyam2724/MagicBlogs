import React from "react";
import { useFormik } from "formik";
import { NavLink, useNavigate } from 'react-router-dom';
import app_config from "../../config";
import Swal from 'sweetalert2';

const Signin = () => {

  const url = app_config.apiurl;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch(url + '/user/auth', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        sessionStorage.setItem('user', JSON.stringify(data.result));
        Swal.fire({
          icon : 'success'
        })

        navigate('/user/addvideo')
      }
    },
    validate: (values) => {
      const errors = {};
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




    <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-circle-user fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        />
                        <span className="h1 fw-bold mb-0">Login</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Enter email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.email && formik.touched.email && (
                          <div className="text-danger">{formik.errors.email}</div>
                        )}
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.password && formik.touched.password && (
                          <div className="text-danger">{formik.errors.password}</div>
                        )}
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >

                          Login
                        </button>
                      </div>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        <NavLink className="nav-link" to="/user/signup">
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a></NavLink>
                      </p>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Signin;
