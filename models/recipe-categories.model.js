const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_categories_schema = new Schema({
    recipe_cat_title: {
        type: String,
        required: true,
        unique: true,
    },
    recipe_cat_desc: {
        type: String
    }
});

const recipes_categories_model = mongoose.model('recipe_categories', recipes_categories_schema);

module.exports = recipes_categories_model;