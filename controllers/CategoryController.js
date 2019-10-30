const Category = require('../models/Category/AddCategory')

exports.add_category = async (req, res) => {
    let category = new Category()

    category.category_name = req.body.category_name
    category.image = req.body.image

    category.save(err => {
        if (!err) {
            res.status(201).json({
                message: 'Data Added Successfully.',
                data: category
            })
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.list_category = (req, res) => {
    Category.find({}, (err, category) => {
        res.status(200).json({ data: category })
    })
}

exports.category = (req,res) => {
    const id = req.params.id
    Category.findById({_id:id})
            .exec()
            .then(result => {
                res.status(200).json({
                    data:result
                })
            })
            .catch(err => {
                res.status(500).json({error:err})
            })
}

exports.edit_category = (req, res) => {
    const option = {
        category_name: req.body.category_name,
        image: req.body.image
    }
    Category.findOneAndUpdate({ _id: req.body.id }, option, err => {
        if (!err) {
            res.status(200).json({ message: "Success" })
        } else {
            res.status(500).json({ message: 'Failed' })
        }
    })
}

exports.delete_category = (req, res) => {
    Category.deleteOne({ _id: req.params.id })
            .exec()
            .then(result => {
                res.status(200).json({
                    message:'Category removed successfully.'
                })
            })
            .catch(err => {
                res.status(500).json({
                    error:err
                })
            })

}

// exports.delete_data = (req, res) => {
//     const id = req.params.id
//     Category.deleteOne({_id:id})
//             .exec()
//             .then(doc =>{
//                 console.log(doc)
//                 res.status(200).json(doc)
//             })
//             .catch(err =>{
//                 console.log(err)
//                 res.status(500).json({error:err})
//             })
// }







