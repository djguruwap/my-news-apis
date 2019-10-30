const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')

//
const userRouter = require('./routes/user')
const apiRouter = require('./routes/api-routes')
const newsRouter = require('./routes/news')
const db = require('./config/key').MONGO_URI

//PORT
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 4000
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost'

//body-parser
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}))
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


app.use(userRouter)
app.use(apiRouter)
app.use(newsRouter)
app.use(helmet())


//MONGo CONNECTION
mongoose.connect(db,{useNewUrlParser : true,useUnifiedTopology: true })
.then(() => {
    console.log('DB connected')
})
.catch(err => console.log(err))
app.listen(server_port,server_ip_address, () => {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
})
