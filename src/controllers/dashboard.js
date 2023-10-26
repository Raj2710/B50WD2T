import blogModel from '../models/blogs.js'
import { Status } from '../common/utils.js'
const getAllBlogs = async(req,res)=>{
    try {
        let blogs = await blogModel.find({status:Status.APPROVED},{_id:1,title:1,imageUrl:1,createdAt:1,description:1}).sort({createdAt:1})
        res.status(200).send({
            message:"Blogs Fetched Successfully",
            blogs
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

export default {
    getAllBlogs
}