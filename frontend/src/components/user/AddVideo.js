import { Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
// import Loading from "../main/Loading";
import { motion } from "framer-motion";

const AddVideo = () => {
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(false);
  const userForm = {
    title: "",
    description: "",
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Video uploaded successfully");
        console.log("uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        toast.success("Image uploaded successfully");
        console.log("uploaded");
      }
    });
  };

  const userSubmit = async (formdata) => {
    setLoading(true);
    formdata.thumbnail = selImage;
    formdata.file = selFile;
    formdata.user = currentUser._id;
    console.log(formdata);
    const response = await fetch("http://localhost:5000/video/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.status);
    if (response.status === 201) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "Video added successfully😁👍",
        icon: "success",
      });
      // getDataFromBackend();
    } else {
      console.log("Something went wrong");
      Swal.fire({
        title: "Error",
        text: "Something went wrong😔",
        icon: "error",
      });
    }
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "keyframes" }}
      className="container-fluid"
    >
      <section className="header-top addvideo-header-bg">
        <h1 className="header-text">Add New Video</h1>
      </section>
      <div className="card mt-5 w-50 mx-auto">
        <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 px-3">
                <label className="mx-1 form-label" htmlFor="form4Example1">
                  Title:-
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  onChange={handleChange}
                  value={values.title}
                  required
                />
              </div>
              <div className="mb-4 px-3">
                <label className="mx-1 form-label" for="form4Example3">
                  Description:-
                </label>
                <TextareaAutosize
                  aria-label="empty textarea"
                  className="form-control"
                  id="description"
                  minRows={5}
                  onChange={handleChange}
                  value={values.description}
                  required
                />
              </div>
              <div className=" mb-4 d-flex justify-content-evenly align-item-center ">
                <Button variant="contained" component="label">
                  <i className="fas fa-upload    "></i> &nbsp; Upload Video
                  <input
                    hidden
                    accept="video/*"
                    multiple
                    type="file"
                    onChange={uploadFile}
                  />
                </Button>
                <Button variant="contained" component="label">
                  <i className="fas fa-upload"></i> &nbsp; Upload Thumbnail
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={uploadImage}
                  />
                </Button>
              </div>
              <div className="d-flex justify-content-center mb-4">
                {!loading ? (
                  <button
                    type="submit"
                    className="btn btn-danger w-75 mb-4 mt-3 rounded-5"
                  >
                    Submit
                  </button>
                ) : (
                  // <Loading></Loading>
                  <h1>Loading ...</h1>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default AddVideo;
