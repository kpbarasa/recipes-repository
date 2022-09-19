express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const atlasURI = process.env.ATLAS_URI || "mongodb+srv://paulBarasa:iZn9gxbNyXFusFN0@cluster0.4p1ws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express()

app.use(cors())

// parse form data
app.use(express.urlencoded({ extended: false }))

// Parse Json 
app.use(express.json())

// Mongo db connection string  starts here
mongoose.connect(atlasURI,{
    useNewUrlParser:true, useUnifiedTopology:true
}, err => {
    if(err){

        console.log('Error un able Connected to MongoDB !!!')

    }
    else{

        console.log('Connected to MongoDB !!!')

    }
})

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully"); 
})
// Mongo db connection string  ends here

// Routes begin here 
const routesRecipies = require('./routes/recipe.routes')
const routesAdmin = require('./routes/admin.routes')

app.use('/recipies/api', routesRecipies)
app.use('/recipies/api/admin', routesAdmin)
// Routes end here 

app.listen(PORT, () => {
    console.log("app listening on PORT: "+PORT);
})

module.exports = app