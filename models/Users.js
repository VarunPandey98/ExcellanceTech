var mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    user_uuid:{
        type: String,
        required:true
    },
    user_first_name:{
        type: String,
        required:true
    },
    user_last_name:{
        type: String
    },
    user_email:{
        type: String,
        required:true
    },
    user_password:{
        type: String,
        required:true
    },
    user_created_date:{
        type: Date,
        default:Date.now
    },
    user_updated_date:{
        type: Date,
        default:Date.now
    },
    user_status:{
        type: String,
        default:'ACTIVE'
    },
    user_is_deleted:{
        type: String,
        default:"NO"
    }
});

module.exports = mongoose.model('users',UsersSchema);
