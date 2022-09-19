const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipes_cuisine_schema = new Schema({
    cuisine_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    user_id: {
        type: String,
        required: true
    },
});

const user_recipes_cuisine_model = mongoose.model('user_recipes_cuisine_repo', user_recipes_cuisine_schema);

module.exports = user_recipes_cuisine_model;