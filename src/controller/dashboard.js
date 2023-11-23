const getDashboard = async(req,res)=>{
    try {
        res.status(200).send({
            message:"Success",
            dashoardData:{
                income:"10000",
                pending:18,
                completed:20
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}

export default {
    getDashboard
}