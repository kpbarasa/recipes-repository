const dotenv = require('dotenv')

//CONFIGURATION FILE
require("dotenv").config();
// LOAD CONFIG FILE
dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT ;

// MONGO DB CONNECTION
const connectDB = require('./config/db')
connectDB()

const app = require('./app')

app.listen(PORT, () => {
    console.log("app listening on PORT: " + PORT);
})

module.exports = app