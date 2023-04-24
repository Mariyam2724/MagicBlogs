import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../config';
import MarkdownPreview from '@uiw/react-markdown-preview';

const ViewBlog = () => {
  const { id } = useParams();
  console.log(id);
  const url = app_config.backend_url;
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState("")

  const getDatafromBackend=async ()=>{
    setLoading(true);
    const response=await fetch(url+"/blog/getbyid/"+id);
    if(response.status===200){
      const data=await response.json();
      setBlogData(data);
      console.log(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatafromBackend();
  }, [])
  
  const displayBlog=()=>{
    if(!loading)
    return(
      <div className='container mt-5'>
        <div className='card'>
          <div className="card-header">
            <div className='col-4'>
          <img src={url+"/"+blogData.image} alt="blog" className='img-fluid rounded-5 '/>
              </div>
          <h1 className='my-2'>{blogData.title}</h1>
          <p>{blogData.description}</p>
          </div>
          <div className="card-body">
          <p>{blogData.text}</p>
          <p>{blogData.category}</p>
          <MarkdownPreview source={blogData.data} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mt-5">{displayBlog()}</div>
  )
}

export default ViewBlog