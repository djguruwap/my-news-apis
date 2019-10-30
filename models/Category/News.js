const mongoose = require('mongoose')

const News = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()

    }
})

module.exports = mongoose.model('New',News)

