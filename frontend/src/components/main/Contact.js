import React from 'react'

const Contact = () => {
  return (
    <div className="container py-4">
  <div className="row g-0 align-items-center">
    <div className="col-lg-6 mb-5 mb-lg-0">
      <div
        className="card cascading-right"
        style={{
          background: "hsla(0, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)"
        }}
      >
        <div className="card-body py-5 px-md-5 shadow-5">
          <h2 className="fw-bold mb-5">Contact us</h2>
          <form>
            {" "}
            {/* Name input */}
            <div className="form-outline mb-4">
              {" "}
              <input type="text" id="form4Example1" className="form-control" />
              <label
                className="form-label"
                htmlFor="form4Example1"
                style={{ marginLeft: 0 }}
              >
                Name
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "42.4px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>{" "}
            {/* Email input */}
            <div className="form-outline mb-4">
              {" "}
              <input type="email" id="form4Example2" className="form-control" />
              <label
                className="form-label"
                htmlFor="form4Example2"
                style={{ marginLeft: 0 }}
              >
                Email address
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div
                  className="form-notch-middle"
                  style={{ width: "88.8px" }}
                />
                <div className="form-notch-trailing" />
              </div>
            </div>{" "}
            {/* Message input */}
            <div className="form-outline mb-4">
              {" "}
              <textarea
                className="form-control"
                id="form4Example3"
                rows={4}
                defaultValue={""}
              />{" "}
              <label
                className="form-label"
                htmlFor="form4Example3"
                style={{ marginLeft: 0 }}
              >
                Message
              </label>
              <div className="form-notch">
                <div className="form-notch-leading" style={{ width: 9 }} />
                <div className="form-notch-middle" style={{ width: 60 }} />
                <div className="form-notch-trailing" />
              </div>
            </div>{" "}
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-center mb-4">
              {" "}
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form4Example4"
                defaultChecked=""
              />{" "}
              <label className="form-check-label" htmlFor="form4Example4">
                Send me a copy of this message
              </label>{" "}
            </div>{" "}
            {/* Submit button */}
            <button
              type="submit"
              className="btn  btn-primary btn-block"
              aria-controls="#picker-editor"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-6 mb-5 mb-lg-0">
      <div className="map-container shadow-1-strong rounded-4">
        {" "}
        <iframe
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="rounded-4"
          frameBorder={0}
          allowFullScreen=""
        />{" "}
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact