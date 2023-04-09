import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageVideos = () => {
  const url = "http://localhost:5000";
  const [videoList, setVideoList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const navigate = useNavigate();

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

  const generateTranscript = (id) => {
    fetch(url + "/util/transcribe/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/blog/addblog/'+id);
      });
  };

  const displayVideos = () => {
    return (
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th>Name</th>
            <th>Password</th>

            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {videoList.map(({ _id, username, email, password }) => (
            <tr key={_id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: 45, height: 45 }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{username}</p>
                    <p className="text-muted mb-0">{email}</p>
                    <p className="text-muted mb-0">{_id}</p>
                  </div>
                </div>
              </td>

              <td>
                <span className="badge badge-success rounded-pill d-inline">
                  {password}
                </span>
              </td>

              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-rounded"
                  onClick={(e) => generateTranscript(_id)}
                >
                  Create Blog
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger btn-sm btn-rounded"
                  // onClick={() => {
                  //   deleteVideo(_id);
                  // }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
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
