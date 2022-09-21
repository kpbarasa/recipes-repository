const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_steps_schema = new Schema({
    recipe_ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: "recipe recipe step no is required !"
    },
    recipe_step_no: {
        type: String,
        unique: true,
        required: "recipe step no is required !"
    },
    recipe_step_description: {
        type: String,
        required: "recipe step description is required !"
    },
    recipe_step_videoUrl: {
        type: String
    },
});

const recipes_steps_model = mongoose.model('recipe_steps_repo', recipes_steps_schema);

module.exports = recipes_steps_model;