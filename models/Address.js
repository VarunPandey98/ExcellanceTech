var mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    address_uuid:{
        type: String,
    },
    address_location:{
        type: String
    },
    address_pincode:{
        type: String
    }, 
    user_uuid:{
        type: String
    },
    address_created_date:{
        type: Date,
        default:Date.now
    },
    address_updated_date:{
        type: Date,
        default:Date.now
    },
    address_status:{
        type: String,
        default:'ACTIVE'
    },
    address_is_deleted:{
        type: String,
        default:"NO"
    }
});

module.exports = mongoose.model('address',AddressSchema);
