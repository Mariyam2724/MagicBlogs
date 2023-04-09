import React, { useEffect, useState } from 'react'

const ManageVideos = () => {
  const url = "http://localhost:5000"
  const [videoList, setVideoList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const nums = [43, 32, 5, 3, 53]

  const getDataFromBackend = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setVideoList(data.result)
      })
  }

  useEffect(() => {
    getDataFromBackend();
  }, [])
  
  
  const displayVideos = () => {
    return videoList.map(video => (
      <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">
          Mangae your videos here! 

          
          
        </p>
           
           

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  </div>
    ))
  }
  
  const displayNumbers = () => {
    return nums.map((n) => (
      <div className="card bg-warning mt-4">
        <div className="card-body">
          <h2>{n}</h2>
        </div>
      </div>
    ))
  }

  const toggleUpdateForm = (userdata) => {
    setShowForm(true);
    setUpdateFormData(userdata);
  }
  return (
    <div>

<div className="row">
  {displayVideos()}
</div>


    </div>
  )
}

export default ManageVideos