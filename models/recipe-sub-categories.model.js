const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_sub_categories_schema = new Schema({
    recipe_cat_id: {
        type: String,
        required: true
    },
    recipe_cat_title: {
        type: String,
        required: true,
        unique: true,
    }
});

const recipes_sub_categories_model = mongoose.model('recipe_sub_categories_repo', recipes_sub_categories_schema);

module.exports = recipes_sub_categories_model;