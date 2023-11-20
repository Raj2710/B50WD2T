const express = require('express')
const fs = require('fs')
const app = express()
const PORT = process.env.PORT || 3000
app.get('/',(req,res)=>{
    try {
        let dateTime = new Date().toISOString() 
        fs.writeFile(`dateTime.txt`,dateTime,(err)=>{
            if(err)
                throw err
            else
            {
                fs.readFile(`dateTime.txt`,(err,data)=>{
                    if(err)
                        throw err
                    else
                        res.status(200).send({message:"File Write Success",dateTime})
                })
            }
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

 app.listen(PORT,()=>console.log(`App Listening Port ${PORT}`))