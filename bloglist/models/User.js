const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    username:{
        type:String,
        required:true, 
        unique:true,
        minlength:3,
    },
    blogs:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}
    ],
    passwordHash:{type:String, required:true},
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;