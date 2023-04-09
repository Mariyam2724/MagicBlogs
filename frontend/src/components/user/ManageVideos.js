import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageVideos = () => {
  const url = "http://localhost:5000";
  const [videoList, setVideoList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getDataFromBackend = () => {
    fetch(url + "/video/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideoList(data.result);
      });
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayVideos = () => {
    return videoList.map((video) => (
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{video.title}</h5>

            <Link to={"/user/"} className="btn btn-primary">
              Use Video
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  const toggleUpdateForm = (userdata) => {
    setShowForm(true);
    setUpdateFormData(userdata);
  };
  return (
    <div>
      <div className="row">{displayVideos()}</div>
    </div>
  );
};

export default ManageVideos;
