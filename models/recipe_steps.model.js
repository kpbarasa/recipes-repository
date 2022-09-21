const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_steps_schema = new Schema({
    recipe_ref_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    recipe_step_no: {
        type:Number,
        required: true,
    },
    recipe_step_description: {
        type: String,
        required: true,
    },
});

const recipes_steps_model = mongoose.model('recipe_steps_repo', recipes_steps_schema);

module.exports = recipes_steps_model;