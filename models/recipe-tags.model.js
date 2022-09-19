const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_tags_schema = new Schema({
    recipe_tag_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    recipe_tag_title: {
        type: String,
        required: true,
        unique: true,
    }
});

const recipes_tags_model = mongoose.model('recipe_tags', recipes_tags_schema);

module.exports = recipes_tags_model;