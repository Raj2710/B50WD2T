const getUsers = (req,res)=>{
    res.status(200).send({
        message:"User Route"
    })
}

module.exports = {
    getUsers
}