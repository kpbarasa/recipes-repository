const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_recipe_schema = new Schema({
  recipe_id:{
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  user_id: {
      type: String,
      required: true
  },
  collection_id:{
    type: String,
    required: true, 
    unique: true
  },
  recipe_title:{
    type: String,
    required: true,  
    unique: true
  },
  recipe_cuisine_id:{
    type: String,
  },
  recipe_cat_id:{
    type: String,
    required: true
  },
  recipe_sub_cat_id:{
    type: String
  },
  recipe_views:{
    type: Number,
    required: true
  },
  recipe_ratting_one:{
    type: Number,
    required: true
  },
  recipe_ratting_two:{
    type: Number,
    required: true
  },
  recipe_ratting_three:{
    type: Number,
    required: true
  },
  recipe_ratting_four:{
    type: Number,
    required: true
  },
  recipe_ratting_five:{
    type: Number,
    required: true
  },
  recipe_img_url:{
    type: String,
    required: true,  
  }
});

const user_recipes_model = mongoose.model('user_recipe_repo', user_recipe_schema);

module.exports = user_recipes_model;