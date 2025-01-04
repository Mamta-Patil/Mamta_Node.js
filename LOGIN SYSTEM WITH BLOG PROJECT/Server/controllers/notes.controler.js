
const notesModel = require("../models/notes.model")
const userModel = require("../models/user.model")

// create notes
const createNotes = async (req, res) => {
    const { title, body } = req.body


    if (!title || !body) {
        res.status(400).json({ message: "title and body is reuired for create note" })
    }
    try {
        await notesModel.create({ title, body, userId: req.user._id })
        res.status(200).json({ message: 'notes created successfully' })
    } catch (error) {
        console.log(error)
        req.status(400).json({ message: error })
    }
}

// delate note by user
const deleteNotes = async (req, res) => {
    console.log("delete parameter", req.params)
    const { notesId } = req.params
    console.log(notesId)
    console.log("req.user._id:   ", req.user._id)
    const isExistNotes = await notesModel.findById(notesId)
    console.log("isExistNotes:", isExistNotes)
    console.log("isExistNotesId:    ", isExistNotes.userId)
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
const GetAllNotesByUser = async (req, res) => {
    const { userId } = req.params
    try {
        if (userId != req.user._id) {
            return res.status(200).json({ message: "you dont permisson to view this notes" })
        }
        const allUserNotes = await notesModel.find({ userId: userId })
        if (!allUserNotes) {
            res.status(400).json({ message: "no notes found" })
        }
        res.status(200).json({ allUserNotes })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// get single note of user
const GetSingleNoteByUser = async (req, res) => {
    const { notesId } = req.params;
    const isExistNotes = await notesModel.findById(notesId)
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
const updateNote = async (req, res) => {
    const { notesId } = req.params
    console.log("line",req.file)


    try {
        const isExistNotes = await notesModel.findById(notesId)

        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        if (isExistNotes.userId !== req.user._id) {
            res.status(400).json({ message: "you can not delete this note" })
        }
        if (req.file) {
            await notesModel.findByIdAndUpdate(notesId, {
                ...req.body,
                noteSImage: req.file.filename,
            }
            )
            res.status(200).json({ message: "Note updated successfully" })
        }
        else {
            await notesModel.findByIdAndUpdate(notesId, {
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
const GetAllNotesByAdmin = async (req, res) => {
    const AllNotes = await notesModel.find()
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

const DelateAllNotesByAdmin = async (req, res) => {
    try {
        await notesModel.deleteMany({})
        res.status(200).json({ notes: "Notes Deleted succeessfull" })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser, updateNote, GetAllNotesByAdmin, DelateAllNotesByAdmin }