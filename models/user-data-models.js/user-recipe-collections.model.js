const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipes_collections_schema = new Schema({
    collection_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    user_id: {
        type: String,
        required: true
    },
    collection_title: {
        type: String,
        required: true,
        unique: true,
    },
    recipes: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

const user_recipes_collections_model = mongoose.model('recipe_collections_repo', user_recipes_collections_schema);

module.exports = user_recipes_collections_model;