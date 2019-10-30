const express = require('express')
const router = express.Router()

//
const newsController = require('../controllers/NewsController')

router.get('/news',(req,res) => {
    res.json('Working....')
})

router.get('/list-news',newsController.list_news)
router.post('/add-news',newsController.addNews)
router.patch('/edit-news/:id',newsController.edit_news)
router.delete('/delete-news/:id',newsController.delete_news)


module.exports = router