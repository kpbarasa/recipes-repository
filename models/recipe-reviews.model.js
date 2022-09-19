const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeReviewSchema = new Schema({
  review_id:{
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  recipe_id:{
    type: String,
    required: true, 
  },
  author_id:{
    type: String,
    required: true, 
  },
  review:{
    type: String,
    required: true,  
  },
  Ratting:{
    type: Number,
    required: true,  
  },
  recipe_date:{
    type: Date,
    required: true, 
  }
});

const recipes_review_model = mongoose.model('recipe_review_repo', recipeReviewSchema);

module.exports = recipes_review_model;