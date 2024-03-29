import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Automated Blog Geneartion System 
              </h6>
              <p>
                Convert your video to a blog using AI at a fast rate and save your time
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Methodology</h6>
              <p>
                <a href="#!" className="text-reset">
                  MERN Stack
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  AI Algorithm(CNN Algorithm)
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  TensorFlow.js
                </a>
              </p>
              
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Your Videos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> Lucknow, Uttar Pradesh, India
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                mariyamtariq@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> +91 8303014796
              </p>
              <p>
                <i className="fas fa-print me-3" /> 
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Automated Blog Geneartion System
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
