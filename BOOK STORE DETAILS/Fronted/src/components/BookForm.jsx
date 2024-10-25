import React from 'react'
import axios from 'axios';
import { useState } from 'react'
const BookForm = () => {
  const initalvalue = {
    title: "",
    price: "",
    description: "",
    author: "",
    image: "",
};
    const [formdata, setformdata] = useState(initalvalue);
    const { title, price, year, author, image } = formdata;


    const handlChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }
        
  // get request
  const getbookdata = () => {
    // get data
    axios.get("http://localhost:8000/bookroute/getuser")
      .then((res) => {
        console.log(res.data)
        // setbooklist(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

    
    // add poduct data
    const handlesubmit = (e) => {
      e.preventDefault();
      console.log(formdata);
    
      axios.post("http://localhost:8000/bookroute/create",formdata)
      .then((res)=>{
          console.log(res.data)
          alert("Product added...")
          getbookdata()
      })
      .catch((err)=>{
          console.log(err)
      })
  }  

// for single Product
  // const singleData=()=>{
  //   axios.get(`http://localhost:8080/getproduct/${id}`)
  //   .then((res)=>{
  //     console.log(res.data)
  //     setformdata(res.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  //   }

  return (
    <div>
       <div>
             <form onSubmit={(e)=>handlesubmit(e)}>
                <p> Add product here which you want </p>
                <input type="text" placeholder='image' onChange={(e) => handlChange(e)} name='image' value={image} />
                <input type="text" placeholder='title' onChange={(e) => handlChange(e)} name='title' value={title} />
                <input type="text" placeholder='year' onChange={(e) => handlChange(e)} name='year' value={year} />
                <input type="text" placeholder='price' onChange={(e) => handlChange(e)} name='price' value={price} />
                <input type="text" placeholder='author' onChange={(e) => handlChange(e)} name='author' value={author} />
                <button className='btn'>  Add product </button>
            </form>
{/* 
            <form onSubmit={(e)=>handlesubmitEdit(e)}>
                <p> Edit product </p>
                <input type="text" placeholder='image' onChange={(e) => handlChangeEdit(e)} name='image' value={image} />
                <input type="text" placeholder='title' onChange={(e) => handlChangeEdit(e)} name='title' value={title} />
                <input type="text" placeholder='description' onChange={(e) => handlChangeEdit(e)} name='description' value={description} />
                <input type="text" placeholder='price' onChange={(e) => handlChangeEdit(e)} name='price' value={price} />
                <input type="text" placeholder='author' onChange={(e) => handlChangeEdit(e)} name='author' value={author} />
                <button className='btn'>  Edit product </button>
            </form> */}

            
    </div>
    </div>
  )
}

export default BookForm

