import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
// import Loading from "../main/Loading";
import "./AudioManager.css";
import { motion } from "framer-motion";

const AudioManager = () => {
  const url = app_config.apiurl;
  const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogLoading, setBlogLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const [selBlog, setSelBlog] = useState(null);

  const [selAudio, setSelAudio] = useState(null);

  const getDataFromBackend = async () => {
    setLoading(true);
    const response = await fetch(url + "/audio/getbyuser/" + currentUser._id);
    console.log(response.status);
    if (response.status === 200) {
      const data = await response.json();
      setUserArray(data.result);
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const convertAudiotoBlog = async (id, index) => {
    setSelBlog(index);
    console.log(id);
    // setTimeout(() => {
    //   console.log(id);
    //   setSelBlog(null);
    // }, 3000);
    // return;
    // setBlogLoading(true);
    const response = await fetch(url + "/util/transcribeaudio/" + id);
    console.log(response.status);
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "Audio converted to blog",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
      const data = await response.json();
      console.log(data);
      // getDataFromBackend();
      
      navigate("/blog/addblog/" + id+'/audio');
      // setBlogLoading(false);
    } else if (response.status === 400) {
      toast.error("Audio is not transcribed yet");
      // setBlogLoading(false);
    } else if (response.status === 500) {
      toast.error("Internal server error");
      // setBlogLoading(false);
    }
    setSelBlog(null);
  };

  const deleteAudio = async (id) => {
    console.log(id);
    const response = await fetch(url + "/audio/delete/" + id, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      toast.success("Audio Deleted Successfully");
      getDataFromBackend();
    }
  };

  const displayAudio = () => {
    if (!loading) {
      return userArray.map(({ _id, title, description, file, thumbnail }, index) => (
        <div className="col-md-3 mt-4" key={_id}>
            <div
              className="thumb-small py-4"
              style={{ backgroundImage: `url('https://resourcecentre.savethechildren.net/static/video_placeholder-74d554a5f2855a914ee3879bd04c55c3.png')`, backgroundSize: 'cover', borderRadius: 10 }}
            >
              <div className="p-3 thumb-options">
                {/* <h5 className="card-title">{title}</h5>
              <p className="text-muted">{description}</p> */}
                <button className="btn btn-primary btn-floating" data-mdb-toggle="modal" data-mdb-target="#videoModal" onClick={e => {
                setSelAudio({ _id, title, description, file, thumbnail })
              }}>
                <i class="fas fa-eye "></i>
              </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  className="btn btn-danger btn-floating"
                  onClick={(e) => deleteAudio(_id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                {!blogLoading ? (
                  <button
                    className={"btn btn-secondary "+(selBlog===index?'btn-rounded':'btn-floating')}
                    onClick={(e) => convertAudiotoBlog(_id, index)}
                  ><i className={"fa-solid fa-gear "+(selBlog===index?'fa-spin':'')}></i>
                    {selBlog===index?' Converting ...':'' }
                  </button>
                ) : (
                  <button className="btn btn-success" disabled>
                    Converting...
                  </button>
                )}
              </div>

              <p className="h3 text-muted ms-3">{title}</p>
              <p className="h6 text-muted ms-3">{file}</p>
            </div>
          
        </div>
      ));
    } else {
      return (
        <div className="text-center">
          {/* <Loading></Loading> */}
          <h1>Loading ...</h1>
        </div>
      );
    }
  };

  return (

    <div style={{backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/005/004/847/non_2x/abstract-wave-audio-and-equalizer-background-design-illustration-futuristic-flow-spectrum-background-design-with-creative-light-and-gradient-modern-music-background-design-vector.jpg")'}}>
    <div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "keyframes" }}
      className="vid-manage-bg"
    >
       <div
          className="modal fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{selAudio && selAudio.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {

                  selAudio && (
                    <video style={{ width: '100%' }} src={url + '/' + selAudio.file} controls></video>
                  )
                }
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      <section className="header-top">
        {/* <i class="fas fa-paperclip header-text"></i> */}
        
      <h1 className="header-text"  style={{textAlign: "center" , color:" white", paddingTop:'20px'}}>Manage Your Audios</h1>
      </section>
      <section>
        
        <div>
          <h3 className="text-center mt-4">All Audios</h3>
        </div>
      </section>
      <section>
        <div className="col-md-10 mx-auto">
          <div className="row mt-3 mb-5">
          <div className="col-md-3 mt-4">
            <Link to="/user/addaudio">
          <div className="card h-100">
            <div className="card-body">
              <motion.img whileHover={{ scale: 1.3 }} transition={{type: 'spring'}} style={{display: 'block', margin: 'auto', height: 150}} src="https://lordicon.com/upload/icons/2022_02/z31mkGzma.gif" alt="" />
            </div>
            </div>
            </Link>
            </div>
            {displayAudio()}
            </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AudioManager;
