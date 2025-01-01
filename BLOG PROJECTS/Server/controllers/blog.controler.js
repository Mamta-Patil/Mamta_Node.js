
const blogModel = require("../models/blog.model")

// create notes
const createBlogs = async (req, res) => {
    const { Title, Author,Content,Tag,PublishedDate } = req.body

    if (!Title || !Author || !Content || !Tag || !PublishedDate) {
      return  res.status(400).json({ message: "title and body is reuired for create note" })
    }
    try {
        await blogModel.create({ Title, Author,Content,Tag,PublishedDate })
       return res.status(200).json({ message: 'notes created successfully' })
    } catch (error) {
        console.log(error)
       return res.status(400).json({ message: error })
    }
}

// delate note by user
const deleteBlogs = async (req, res) => {
    console.log("delete parameter", req.params)
    const { blogId } = req.params
    console.log(blogId)
    // console.log("req.user._id:   ", req.user._id)
    const isExistNotes = await blogModel.findById(blogId)
    if (!isExistNotes) {
        res.status(400).json({ message: "notes not found" })
    }

    await blogModel.findByIdAndDelete(blogId)
    res.status(200).json({ message: 'notes Delated successfully' })

}

// get notes by user
const GetAllBlogs = async (req, res) => {
    const { blogId } = req.params
    // console.log("GetAllNotesByUser: " ,userId)
    try {
        const allUserNotes = await blogModel.find()
        if (!allUserNotes) {
            res.status(400).json({ message: "no notes found" })
        }
        res.status(200).json({ allUserNotes })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// get single note of user
const GetSingleBlog = async (req, res) => {
    const { blogId} = req.params;
    const isExistNotes = await blogModel.findById(blogId)
    try {
        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        // if (isExistNotes.userId != req.user._id) {
        //     res.status(400).json({ message: "you can not view this note" })
        // }

        res.status(200).json({ blogs: isExistNotes })

    } catch (error) {
        res.status(400).json({ message: error })
    }

}

// update notes
const updatBlog = async (req, res) => {
    const { blogId } = req.params
    console.log(blogId)

    try {
        const isExistNotes = await blogModel.findById(blogId)

        if (!isExistNotes) {
            res.status(400).json({ message: "notes not found" })
        }
        // if (isExistNotes.userId !== req.user._id) {
        //     res.status(400).json({ message: "you can not delete this note" })
        // }
        if (req.file) {
            await blogModel.findByIdAndUpdate(blogId, {
                ...req.body,
                notesImage: req.file.originalname,
            }
            )
            res.status(200).json({ message: "Note updated successfully" })
        }
        else {
            await blogModel.findByIdAndUpdate(blogId, {
                ...req.body,
            })
            res.status(200).json({ message: "Note updated successfully" })
        }
    }

    catch (error) {
        res.status(400).json({ message: error })
    }

}

module.exports = { createBlogs,deleteBlogs,updatBlog,GetAllBlogs,GetSingleBlog }