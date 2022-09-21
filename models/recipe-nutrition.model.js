const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_nutrition_schema = new Schema({
    recipe_ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    calories: {
        type: Number
    },
    sodium: {
        type: Number
    },
    fat: {
        type: Number
    },
    protein: {
        type: Number
    },
    carbs: {
        type: Number
    },
    fiber: {
        type: Number
    }
});

const recipes_nutrition_model = mongoose.model('recipe_nutrition_repo', recipes_nutrition_schema);

module.exports = recipes_nutrition_model;