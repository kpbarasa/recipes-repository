const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_ingridients_schema = new Schema({
    recipe_ingridient_title: {
        type: String,
        required: true,
    },
    si_unit: {
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
    }
});

const recipes_ingridients_model = mongoose.model('recipe_ingridients_repo', recipes_ingridients_schema);

module.exports = recipes_ingridients_model;