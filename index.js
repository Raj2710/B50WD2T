import express from 'express'
import IndexRouter from './src/routes/index.js'
const PORT = process.env.PORT || 8000
const app = express()

app.use('/',IndexRouter)

app.listen(PORT,()=>{
    console.log(`Server listening port ${PORT}`)
})
