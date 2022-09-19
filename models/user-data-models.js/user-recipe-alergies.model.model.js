const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipes_alergies_schema = new Schema({
    alergie_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    },
});

const user_recipes_alergies_model = mongoose.model('user_recipes_alergies_repo', user_recipes_alergies_schema);

module.exports = user_recipes_alergies_model;