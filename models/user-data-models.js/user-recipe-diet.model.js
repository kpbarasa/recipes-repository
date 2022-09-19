const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipes_diet_schema = new Schema({
    diet_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    user_id: {
        type: String,
        required: true
    },
    diet_title: {
        type: String,
        required: true,
        unique: true,
    },
    diet_description: {
        type: String,
        required: true,
    }
});

const recipes_diet_model = mongoose.model('user_recipe_diet_repo', user_recipes_diet_schema);

module.exports = recipes_diet_model;