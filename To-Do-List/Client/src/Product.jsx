import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Product = () => {
    const [product, setproduct] = useState([])
    
    //read data
    const data=()=>{
        axios.get("http://localhost:8080/getdata")
        .then((res) => {
            console.log(res)
            setproduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    // delete data
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8080/deletproduct/${id}`)
        .then((res)=>{
           console.log(res)
           alert("Product Deleted Successfully")
           data()
        })
        .catch((err)=>{ 
            console.log(err)
        })
    }

  
    useEffect(() => {
       data()
    }, [])

    return (
        <div>
          
            {/* map to data */}
            <div className="product"> 
                {product.map((item) => (
                    <div key={item.id} style={{ border: "2px solid cyan", margin: "5px", textAlign: "center" }} >
                        <p> {item.id} </p>
                        <img src={item.image} height={200} width={200} />
                        <p> {item.title} </p>
                        <p> {item.price} </p>
                        <p>{item.category} </p>
                        <button>
                            <Link to={`/Edit/${item.id}`}>  Edit
                            </Link>
                            </button>
                        <button style={{ marginLeft: "5px" }} onClick={()=>handleDelete(item.id)}>Delet</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Product
