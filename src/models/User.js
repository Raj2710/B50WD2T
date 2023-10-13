const mongoose = require('./index')

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:[true,"First Name is required"]},
    lastName:{type:String,required:[true,"Last Name is required"]},
    email:{type:String,required:[true,"Email is required"],validate:validateEmail},
    password:{type:String,required:[true,"Password is required"]},
    status:{type:Boolean,default:true},
    role:{type:String,default:'customer'},
    createdAt:{type:Date, default:Date.now()}
},{
    collection:'users',
    versionKey:false
})

const userModel = mongoose.model('users',userSchema)
module.exports = userModel