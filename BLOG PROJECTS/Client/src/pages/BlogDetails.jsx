import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const BlogDetails = () => {

  const [blogData, setblogData] = useState([])


  const { blogId } = useParams()
  console.log(blogId)


  const getSingleBlog = () => {
    axios.get(`${import.meta.env.VITE_BASEURL}blog/getsingleblog/${blogId}`)
      .then((res) => {
        console.log(res.data.blogs)
        setblogData(res.data.blogs)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getSingleBlog()
  }, [])

  return (
    <div>
      <h2>Blog Detail:</h2>
      <div className='d-flex flex-wrap gap-4'>
        {
            <div key={blogData._id}>
              <p> {blogData._id} </p>
              <h4> {blogData.Title} </h4>
              <h6> {blogData.Auther} </h6>
              <p> {blogData.Content} </p>
              <p> {blogData.Tag} </p>
              <h2> {blogData.PublishedDate} </h2>
            </div>
        }
      </div>
    </div>
  )
}

export default BlogDetails