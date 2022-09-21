const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_cuisine_schema = new Schema({
    cuisine_title: {
        type: String,
        required: true,
        unique: true,
    },
    cuisine_country: {
        type: String,
        required: true,
    }
});

const recipes_cuisine_model = mongoose.model('recipe_cuisine_repo', recipes_cuisine_schema);

module.exports = recipes_cuisine_model;