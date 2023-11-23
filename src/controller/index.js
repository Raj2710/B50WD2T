import fs from 'fs'
const path = 'src/asset'
const readWriteFile = async(req,res)=>{
    try {
        let dateTime = new Date().toISOString()
        
        fs.writeFileSync(`${path}/${dateTime}.txt`,dateTime,'utf-8')

       let content = fs.readFileSync(`${path}/${dateTime}.txt`,'utf-8')

        res.status(200).send({
            status:200,
            message:"Success",
            dateTime:content
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}

export default {
    readWriteFile
}