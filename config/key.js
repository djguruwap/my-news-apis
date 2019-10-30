const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0-vmyny.mongodb.net/container?retryWrites=true&w=majority`
module.exports = {
    MONGO_URI : uri
}