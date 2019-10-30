const express = require('express')
const multer = require('multer')
const router = express.Router()
//Controllers
const category_controller = require('../controllers/CategoryController')

router.get('/', (req, res, cd) => {
    res.json({ meaasge: 'api is working...' })
})

router.get('/list-category', category_controller.list_category)
router.get('/category/:id', category_controller.category)
router.post('/add-category', category_controller.add_category)
router.patch('/edit-category/:id', category_controller.edit_category)
router.delete('/delete-category/:id', category_controller.delete_category)


//multer logic
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file)
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        let filename = `image-${Date.now()}`
        switch (file.mimetype) {
            case 'image/jpeg':
                filename = filename + ".jpeg"
                break
            case 'image/png':
                filename = filename + ".png"
                break
            default:
                break
        }
        cb(null,filename)
    }
})

const upload = multer({storage:storage})

router.post('/upload',upload.single('file'),(req,res,next) => {
    const file = req.file
    if(!file){
        console.log('Please upload a file')
    }
    res.json({meaasge:'File uploaded.'})
})


module.exports = router 
