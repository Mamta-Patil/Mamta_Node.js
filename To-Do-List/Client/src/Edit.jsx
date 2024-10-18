import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {

  const initalState={
    title:"",
    price:"",
    description:"",
    category:"",
  }

  const {id}=useParams()
  const [formdata,setformdata]=useState(initalState)
  
  const {title,price,description,image,category}=formdata;

  const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:[e.target.value]})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.patch(`http://localhost:8080/updateproduct/${id}`,formdata)
    .then((res)=>{
      console.log(res.data)
      singleData()
      alert("Product updated successfully")
    })
    .catch((err)=>{
      alert("error")
      console.log(err)
    })

  }

  // get SingleData
  const singleData=()=>{
    axios.get(`http://localhost:8080/getproduct/${id}`)
    .then((res)=>{
      console.log(res.data)
      setformdata(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    }


    useEffect(()=>{
      singleData()
    },[])

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label htmlFor="">Image</label>
        <input type="text" name='image' value={image} placeholder='image' onChange={handleChange} />
        <label htmlFor="">Title</label>
        <input type="text" name='title' value={title} placeholder='title' onChange={handleChange} />
        <label htmlFor="">Price</label>
        <input type="text" name='price' value={price} placeholder='price' onChange={handleChange} />
        <label htmlFor="">Description</label>
        <input type="text" name='description' value={description} placeholder='description' onChange={handleChange} />
        <label htmlFor="">Category</label>
        <input type="text" name='category' value={category} placeholder='category' onChange={handleChange} />
        <button className='btn'>  Edit </button>
      </form> 
    </div>
  )
}

export default Edit
