const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_nutrition_schema = new Schema({
    recipe_ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    calories: {
        type: Number,
        required: true
    },
    sodium: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fiber: {
        type: Number,
        required: true
    }
});

const recipes_nutrition_model = mongoose.model('recipe_nutrition', recipes_nutrition_schema);

module.exports = recipes_nutrition_model;