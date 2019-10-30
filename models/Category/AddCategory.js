const mongoose = require('mongoose')

const AddCategory = mongoose.Schema({
    category_name: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Category',AddCategory)
