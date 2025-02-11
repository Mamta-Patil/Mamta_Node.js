import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({title,image,postId}) => {
  console.log("image",image)
  const handlleDelete=(postId)=>{
    // console.log("postId:",postId)
    axios.delete(`${import.meta.env.VITE_BASEURL}notes/delate/${postId}`, { withCredentials: true })
    .then((res)=>{
      console.log(res)
      console.log("deleted data sucessfully")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='col-md-6 col-lg-4 w-100 mt-5'>
      <div className="card">
        <Link to={`/getsinglenote/${postId}`}>
            <img src={image[0]=="h"?image:`http://localhost:8080/${image}`} alt="" height={200} width={200} />
        </Link>
        <div className="card-body">
          <div className="card-title">
            <p className='text-center'> {title} </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn border-dark btn-info ps-4 pe-4'>
            <Link to={`/edit/${postId}`}>Edit</Link>
            </button>
          <button className='btn border-dark ms-2 btn-info ps-3 pe-3' onClick={()=>handlleDelete(postId)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
