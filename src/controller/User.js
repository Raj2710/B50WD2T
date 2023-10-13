const userModel = require('../models/User')
const getUsers = async(req,res)=>{
   try {
        let users = await userModel.find()
        res.status(200).send({
            message:"User Data Fetched Successfully",
            users
        })
   } catch (error) {
    console.log(error)
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
   }
}

const getUserById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        res.status(200).send({
            message:"User Fetched Successfully",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const create = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(!user){
            await userModel.create(req.body)
            res.status(201).send({
                message:"User Created Successfully"
             })
        }
        else
        {
            res.status(400).send({message:`User with ${req.body.email} already exists`})
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const editUserById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        if(user)
        {
            let {firstName,lastName,email,password,status,role} =  req.body
            // await userModel.updateOne({_id:req.params.id},{
            //     $set:req.body
            // }) not recomended
            user.firstName = firstName?firstName:user.firstName
            user.lastName = lastName?lastName:user.lastName
            user.email = email?email:user.email
            user.password = password?password:user.password
            user.status = status?status:user.status
            user.role = role?role:user.role

            await user.save()


            res.status(200).send({
                message:"User Data Saved"
            })
        }
        else
        {
            res.status(400).send({message:"Invalid User"})
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const deleteUserById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        if(user)
        {
            await userModel.deleteOne({_id:req.params.id})
            res.status(200).send({message:"User Deleted Successfully"})
        }
        else
        {
            res.status(400).send({message:"Invalid User"})
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

module.exports = {
    getUsers,
    create,
    getUserById,
    editUserById,
    deleteUserById
}