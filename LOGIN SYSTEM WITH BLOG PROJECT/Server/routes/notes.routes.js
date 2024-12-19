const express=require("express")
const isAuth = require("../middleware/AUth")

const { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser } = require("../controllers/notes.controler")

const notesRouter= express.Router()

notesRouter.post("/create",isAuth,createNotes)

// delete notes
notesRouter.delete("/delate/:notesId",isAuth,deleteNotes)

// Get ALl notes of user
notesRouter.get("/getallnotes/:userId",isAuth,GetAllNotesByUser)

// gsingle notes by user
notesRouter.get("/getsinglenote/:notesId",isAuth,GetSingleNoteByUser)

module.exports=notesRouter