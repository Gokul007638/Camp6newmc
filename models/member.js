const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const MemberSchema = new Schema({
    member_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {type: String, required:true, unique:true},
    phone_number: {
        type: String
    },
    address: {
        type: String
    },
    role:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Role', required:true
    }
});
MemberSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Member', MemberSchema)