const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipes_ingridients_schema = new Schema({
    recipe_ingridient_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    user_id: {
        type: String,
        required: true
    },
    recipe_ingridient_title: {
        type: String,
        required: true,
    },
    si: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    recipe_ingridient_descprition: {
        type: String
    },
    recipe_ingridient_cost: {
        type: Number
    },
    recipe_ingridient_store: {
        type: String
    }
});

const user_recipes_ingridients_model = mongoose.model('recipe_ingridients_repo', user_recipes_ingridients_schema);

module.exports = user_recipes_ingridients_model;