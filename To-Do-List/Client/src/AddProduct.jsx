import axios from 'axios';
import React, { useState } from 'react'

const AddProduct = () => {
    
const initalvalue = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
};
    const [formdata, setformdata] = useState(initalvalue);
    const { title, price, description, category, image } = formdata;


    const handlChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }

    
    // add poduct data
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
      
        axios.post("http://localhost:8080/postdata",formdata)
        .then((res)=>{
            console.log(res.data)
            alert("Product added...")
            data()
        })
        .catch((err)=>{
            console.log(err)
        })
    }    

  return (
    <div>
             <form onSubmit={(e)=>handlesubmit(e)}>
                <p> Add product here which you want </p>
                <input type="text" placeholder='image' onChange={(e) => handlChange(e)} name='image' value={image} />
                <input type="text" placeholder='title' onChange={(e) => handlChange(e)} name='title' value={title} />
                <input type="text" placeholder='description' onChange={(e) => handlChange(e)} name='description' value={description} />
                <input type="text" placeholder='price' onChange={(e) => handlChange(e)} name='price' value={price} />
                <input type="text" placeholder='category' onChange={(e) => handlChange(e)} name='category' value={category} />
                <button className='btn'>  Add product </button>
            </form>
    </div>
  )
}

export default AddProduct
