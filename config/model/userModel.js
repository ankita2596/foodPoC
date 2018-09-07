const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        username : {type : String, required : true},
        emailId  : {type : String, required: true},
        password : {type : Number,required : true}
}, {
    timeStamps : {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'false'
    }
});

module.exports = mongoose.model('user',userSchema);