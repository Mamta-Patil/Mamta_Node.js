import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MoviesDetails = () => {

    const [notesdata, setNotesdata] = useState([])
    const userdata = useParams()
    console.log(userdata)

    const { notesId } = useParams()
    console.log(notesId)

    const getNotes = () => {
        console.log("notes................", notesdata)

        axios.get(`${import.meta.env.VITE_BASEURL}notes/getsinglenote/${notesId}`, { withCredentials: true })
            .then((res) => {
                console.log(res)
                setNotesdata(res.data.notes)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getNotes()
    }, [])


    return (
        <div>
            <h3>Notes Detail:</h3>
            <div className='d-flex flex-wrap gap-4 notesDetails'>
                    <div>
                        <h5>{notesdata.title}</h5>
                        <img src={notesdata.noteSImage} alt="" />
                        <h6>{notesdata.body} </h6>
                    </div>
            </div>
        </div>
    )
}

export default MoviesDetails
