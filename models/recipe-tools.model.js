const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_tools_schema = new Schema({
    tool_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    tool_title: {
        type: String,
        required: true,
    },
    tool_description: {
        type: String,
        required: true,
    }
});

const recipes_tools_model = mongoose.model('recipe_tools_repo', recipes_tools_schema);

module.exports = recipes_tools_model;