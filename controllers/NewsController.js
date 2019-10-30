const News = require('../models/Category/News')

exports.list_news = (req,res) => {
    News.find({},(err,category) => {
        res.json({
            status:200,
            data:category
        })
    })
}

exports.addNews = (req,res) => {
    const news = new News()

    news.title = req.body.title
    news.date=req.body.date,
    news.category = req.body.category
    news.image=req.body.image,
    news.content = req.body.content

    news.save(err => {
        if(!err){
            res.json({
                status:200,
                message:'News added successfully',
                data:news
            })
        }
        res.json({
            message:err
        })
    })

}

exports.edit_news = (req,res) => {
    const id = req.body.id
    const options ={
        title:req.body.title,
        date:req.body.date,
        category:req.body.category,
        image:req.body.image,
        content:req.body.content
    }
    News.findOneAndUpdate({_id:id},options)
        .exec()
        .then(result => {
            res.status(200).json({
                message:'Update successfully'
            })
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
}

exports.delete_news = (req,res) => {
    News.deleteOne({_id:req.params.id})
        .exec()
        .then(result => {
            res.status(200).json({
                message:'Remove successfully'
            })
        })
        .catch(err => {
            res.status(500).json({error:err})
        })
}