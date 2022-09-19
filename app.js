const express = require('express')
const morgan = require('morgan')

const app = express();

// PARSE FORM DATA
app.use(express.urlencoded({ extended: false }))

// PARSE JSON DATA
app.use(express.json())

// ERROR HANDLERS
const errorHandlers = require("./handlers/errorHandler");
// app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}

// ROUTES
const routesRecipies = require('./routes/recipe.routes')
const routesAdmin = require('./routes/admin.routes')

app.use('/recipies/api', routesRecipies)
app.use('/recipies/api/admin', routesAdmin)

module.exports = app;