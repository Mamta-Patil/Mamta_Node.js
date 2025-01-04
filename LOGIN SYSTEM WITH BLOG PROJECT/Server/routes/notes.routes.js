const express=require("express")
const isAuth = require("../middleware/AUth")
const upload=require("../config/multer")
const app = express()

app.use(express.static("./upload"))

const { createNotes, deleteNotes, GetAllNotesByUser, GetSingleNoteByUser, updateNote, GetAllNotesByAdmin, DelateAllNotesByAdmin } = require("../controllers/notes.controler")

const notesRouter= express.Router()

notesRouter.post("/create",isAuth,createNotes)
 
// delete notes
notesRouter.delete("/delate/:notesId",isAuth,deleteNotes)
    
// Get ALl notes of user
notesRouter.get("/getallnotes/:userId",isAuth,GetAllNotesByUser)

// single notes by user
notesRouter.get("/getsinglenote/:notesId",isAuth,GetSingleNoteByUser)

// update note
notesRouter.patch("/updatenote/:notesId",isAuth,upload.single("file"),updateNote)

// get all notes by admin
notesRouter.get("/getallnotes",GetAllNotesByAdmin)

// get deleted by admin
notesRouter.delete("/deletallnotes",DelateAllNotesByAdmin)

module.exports=notesRouter