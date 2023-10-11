// console.log("Welcome to the World of Backend")
//Pacakages
//1. Inbuilt os, file system, http, https
//2. Third party packages - axios
//3. Custom built package

// const os = require('os')
// console.log(os.cpus())
// console.log(os.hostname())

// const fs = require('fs')

// fs.writeFile('./Sample1.txt','This is a new file','utf-8',(error)=>{
//     if(error)
//         console.log(error)
//     else{
//         fs.readFile('./Sample1.txt','utf-8',(error,data)=>{
//             if(error)
//                 console.log(error)
//             else
//                 console.log(data)
//         })
//     }
// })


// try {
//     fs.writeFileSync('./Sample.txt','This is a new file','utf-8')
//     let data = fs.readFileSync('./Sample.txt','utf-8')
//      console.log('Sync',data)
// } catch (error) {
//     console.log(error)
// }


// let data = fs.readFileSync('./Sample.txt','utf-8')
// console.log('Sync',data)

// const fs = require('fs')
// const http = require('http')
// const server = http.createServer((req,res)=>{
//     try {
//         let date = new Date()
//         fs.writeFileSync(`${+date}`,date.toISOString())
//         let data = fs.readFileSync(`${+date}`,'utf-8')

//         res.writeHead(200,{
//             "Content-Type":"text/html"
//         })

//         res.end(data)
        
//     } catch (error) {
//         console.log(error)
//     }
//     res.end()
// })

// server.listen(8000,()=>console.log("Server is listening port 8000"))