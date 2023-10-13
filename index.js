const express = require('express') //commonJS Import older version
// import express from 'express'//ES Module Import add "type": "module" in package.json
const AppRoutes = require('./src/routes')
const app = express()
app.use(express.json())

app.use('/',AppRoutes)


app.listen(8000,()=>console.log("Server listening to port 8000"))

// npm init
// npm i express
// "start": "node index.js",