import { Container } from '@mui/system';
import React from 'react'

const Profile = () => {
  return (
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Profile | suhasrkms</title>
  {/* Fonts */}
  <link rel="dns-prefetch" href="//fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css?family=Nunito"
    rel="stylesheet"
  />
  {/* Bootstrap */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <div id="app">
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Side Of Navbar */}
          <ul className="navbar-nav mr-auto"></ul>
          {/* Right Side Of Navbar */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link One
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link Two
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main className="py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h4 className="pb-2">Profile Information</h4>
            <span className="text-justify mb-3" style={{ paddingTop: "-3px" }}>
              Update your account's profile information and email address.
              <br />
              <br /> When You change your email ,you need to verify your email
              else the account will be blocked
            </span>
          </div>
          <div className="col-lg-8 text-center pt-2">
            <div
              className="card py-4 mb-5 mt-md-3 bg-white rounded "
              style={{ boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)" }}
            >
              <form>
                <div className="form-group px-3">
                  <label
                    htmlFor="displayName"
                    className="col-12 text-left pl-0"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="col-md-8 form-control"
                    placeholder="Jane Doe"
                  />
                  <label htmlFor="email" className="pt-3 col-12 text-left pl-0">
                    Email
                  </label>
                  <input
                    type="email"
                    className="col-md-8 form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group row mb-0 mr-4">
                  <div className="col-md-8 offset-md-4 text-right">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-bottom border-grey" />
        <div className="row justify-content-center pt-5">
          <div className="col-lg-4">
            <h4 className="pb-2">Update Password</h4>
            <span className="text-justify" style={{ paddingTop: "-3px" }}>
              Ensure your account is using a long, random password to stay
              secure.
            </span>
          </div>
          <div className="col-lg-8 text-center pt-2">
            <div
              className="card py-4 mb-5 mt-md-3 bg-white rounded"
              style={{ boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)" }}
            >
              <form>
                <div className="form-group px-3">
                  <label htmlFor="password" className="col-12 text-left pl-0">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="col-md-8 form-control"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="pt-3 col-12 text-left pl-0"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="col-md-8 form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group row mb-0 mr-4">
                  <div className="col-md-8 offset-md-4 text-right">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="border-bottom border-grey" />
        <div className="row justify-content-center pt-5">
          <div className="col-lg-4">
            <h4 className="pb-2">Delete Account</h4>
            <span className="text-justify" style={{ paddingTop: "-3px" }}>
              Permanently delete your account.
            </span>
          </div>
          <div className="col-lg-8 pt-0">
            <div
              className="card py-4 mb-5 mt-md-3 bg-white rounded"
              style={{ boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)" }}
            >
              <div className="text-left px-3">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
              </div>
              <form>
                <div className="form-group row mb-0 mr-4 pt-4 px-3">
                  <div className="col-md-8 offset-l-4 text-left">
                    <button type="submit" className="btn btn-danger pl-3">
                      Delete Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <footer id="sticky-footer" className="flex-shrink-0 py-4 text-dark-50">
    <div className="container text-center">
      <small>
        Made with ❤️ by{" "}
        <a
          href="https://suhasrkms.github.io/"
          style={{ textDecoration: "none" }}
        >
          suharkms
        </a>
      </small>
    </div>
  </footer>
</>

  )
}

export default Profile;