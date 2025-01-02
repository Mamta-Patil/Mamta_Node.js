
// const blogModel = require("../models/blog.model")

const blogModel = require("../models/blog")

// create notes
const createBlogs = async (req, res) => {
    const { Title, Author,Content,Tag,PublishedDate } = req.body

    if (!Title || !Author || !Content || !Tag || !PublishedDate) {
      return  res.status(400).json({ message: "all fields are required" })
    }
    try {
        await blogModel.create({ Title, Author,Content,Tag,PublishedDate })
       return res.status(200).json({ message: 'blog created successfully' })
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
    const isBLog = await blogModel.findById(blogId)
    if (!isBLog) {
        res.status(400).json({ message: "blog not found" })
    }

    await blogModel.findByIdAndDelete(blogId)
    res.status(200).json({ message: 'blog Delated successfully' })

}

// get BLog by user
const GetAllBlogs = async (req, res) => {
    const { blogId } = req.params
    try {
        const allblog = await blogModel.find()
        if (!allblog) {
            res.status(400).json({ message: "no blog found" })
        }
        res.status(200).json({ allblog })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

// get single note of user
const GetSingleBlog = async (req, res) => {
    const { blogId} = req.params;
    const isBlog = await blogModel.findById(blogId)
    try {
        if (!isBlog) {
            res.status(400).json({ message: "blog not found" })
        }

        res.status(200).json({ blogs: isBlog })

    } catch (error) {
        res.status(400).json({ message: error })
    }

}

// update notes
const updatBlog = async (req, res) => {
    const { blogId } = req.params
    console.log(blogId)

    try {
        const isBlog = await blogModel.findById(blogId)

        if (!isBlog) {
            res.status(400).json({ message: "notes not found" })
        }
        // if (req.file) {
        //     await blogModel.findByIdAndUpdate(blogId, {
        //         ...req.body,
        //         notesImage: req.file.originalname,
        //     }
        //     )
        //     res.status(200).json({ message: "Note updated successfully" })
        // }
        else {
            await blogModel.findByIdAndUpdate(blogId, {
                ...req.body,
            })
            res.status(200).json({ message: "blog updated successfully" })
        }
    }

    catch (error) {
        res.status(400).json({ message: error })
    }

}

module.exports = { createBlogs,deleteBlogs,updatBlog,GetAllBlogs,GetSingleBlog }