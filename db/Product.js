const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
        name :String,
        price : String,
        company : String,
        category : String,
        user_id : String
})
module.exports = mongoose.model("products",productSchema);