const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipes_alergies_schema = new Schema({
    alergie_id: {
        type: String,
        required: true,
        unique: true,
        index: { unique: true }
    },
    alergie_title: {
        type: String,
        required: true,
        unique: true,
    },
    alergie_description: {
        type: String,
        required: true,
    }
});

const recipes_alergies_model = mongoose.model('recipes_alergies_repo', recipes_alergies_schema);

module.exports = recipes_alergies_model;