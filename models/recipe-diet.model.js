const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_diet_schema = new Schema({
    diet_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
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

const recipes_diet_model = mongoose.model('recipe_diet_repo', recipes_diet_schema);

module.exports = recipes_diet_model;