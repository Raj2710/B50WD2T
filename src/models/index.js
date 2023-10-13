const mongoose = require('mongoose')
const DB = require('../common/dbConfig')

try {
    mongoose.connect(`${DB.dbUrl}/${DB.dbName}`)
} catch (error) {
    console.log(error)
}

module.exports=mongoose