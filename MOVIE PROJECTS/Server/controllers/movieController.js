
const movieModel = require("../models/movie")
// const userModel = require("../models/user.model")

// create notes
const createMovie = async (req, res) => {
    const { Title, Genre, Director,Description,ReleaseYear } = req.body
    
    if (!Title || !Genre  || !Director || !Description || !ReleaseYear) {
        res.status(400).json({ message: "title and body is reuired for create note" })
    }
    try {
        await movieModel.create({ Title, Genre, Director,Description,ReleaseYear, userId: req.user._id })
        res.status(200).json({ message: 'Movie created successfully' })
    } catch (error) {
        console.log(error)  
        req.status(400).json({ message: error })
    }
}

// delate note by user
const deleteMovie = async (req, res) => {
    console.log("delete parameter", req.params)
    const { notesId } = req.params
    console.log(notesId)
    console.log("req.user._id:   ", req.user._id)
    const isExistNotes = await movieModel.findById(notesId)
    // console.log("isExistNotes:", isExistNotes)
    // console.log("isExistNotesId:    ", isExistNotes.userId)
    if (!isExistNotes) {
        res.status(400).json({ message: "notes not found" })
    }
    if (isExistNotes.userId !== req.user._id) {
        res.status(400).json({ message: "you can not delete this note" })
    }

    await notesModel.findByIdAndDelete(notesId)
    res.status(200).json({ message: 'notes Delated successfully' })

}

// get notes by user
const GetAllMovieByUser = async (req, res) => {
    const { userId } = req.params
    try {
        if (userId != req.user._id) {
            return res.status(200).json({ message: "you dont permisson to view this notes" })
        }
        const allUserNotes = await movieModel.find({ userId: userId })
        if (!allUserNotes) {
            res.status(400).json({ message: "no notes found" })
        }
        res.status(200).json({ allUserNotes })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// get single note of user
const GetSingleMovieByUser = async (req, res) => {
    const { notesId } = req.params;
    const isExistNotes = await movieModel.findById(notesId)
    try {
        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        if (isExistNotes.userId != req.user._id) {
            res.status(400).json({ message: "you can not view this note" })
        }

        res.status(200).json({ notes: isExistNotes })

    } catch (error) {
        res.status(400).json({ message: error })
    }

}

// update notes
const updateMovie = async (req, res) => {
    const { notesId } = req.params
    console.log("line",req.file)


    try {
        const isExistNotes = await movieModel.findById(notesId)

        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        if (isExistNotes.userId !== req.user._id) {
            res.status(400).json({ message: "you can not delete this note" })
        }
      
        else {
            await movieModel.findByIdAndUpdate(notesId, {
                ...req.body,
            })
            res.status(200).json({ message: "Note updated successfully" })
        }
    }

    catch (error) {
        res.status(400).json({ message: error })
    }

}

// get all notes by admin
const GetAllMoviesByAdmin = async (req, res) => {
    const AllNotes = await movieModel.find()
    console.log(AllNotes)
    try {
        if (AllNotes.length == 0) {
            return res.status(200).json({ message: "No notes Found" })
        }
        res.status(200).json({ notes: AllNotes })

    } catch (error) {
        console.log(error)
    }
}

const DelateAllMoviesByAdmin = async (req, res) => {
    try {
        await movieModel.deleteMany({})
        res.status(200).json({ notes: "Notes Deleted succeessfull" })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {createMovie,updateMovie,deleteMovie,GetAllMovieByUser,GetAllMoviesByAdmin,GetSingleMovieByUser,DelateAllMoviesByAdmin}