import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BookFormEdit = () => {

  // const [booklist, setbooklist] = useState([])
  
  // const [formdata,setformdata]=useState("")


  const {id}=useParams()

  const initalvalue = {
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
};
    const [formdata, setformdata] = useState(initalvalue);
    const { title, price, author,year, img } = formdata;


    const handlChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }

    
    // add poduct data
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(formdata);
      
        axios.patch(`http://localhost:8000/bookroute/updatedata/${id}`,formdata)
        .then((res)=>{
            console.log(res.data)
            alert("Product updated successfully...")
        })
        .catch((err)=>{
            console.log(err)
        })
    }    
    
  // get SingleData
  const singleData=()=>{
    axios.get(`http://localhost:8000/bookroute/getsingleuser/${id}`)
    // console.log(id)
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
       <form onSubmit={(e)=>handlesubmit(e)}>
                <p> Edit product </p>
                <input type="text" placeholder='image' onChange={(e) => handlChange(e)} name='img' value={img} />
                <input type="text" placeholder='title' onChange={(e) => handlChange(e)} name='title' value={title} />
                <input type="text" placeholder='year' onChange={(e) => handlChange(e)} name='year' value={year} />
                <input type="text" placeholder='price' onChange={(e) => handlChange(e)} name='price' value={price} />
                <input type="text" placeholder='author' onChange={(e) => handlChange(e)} name='author' value={author} />
                <button className='btn'>  Edit product </button>
            </form>
    </div>
  )
}
export default BookFormEdit