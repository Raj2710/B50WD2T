const getUsers = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Success",
            userData:[]
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}

export default {
    getUsers
}