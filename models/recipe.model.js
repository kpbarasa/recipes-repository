const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({
  recipe_id:{
    type: String,
    required: true, 
    unique: true,
    index:{unique: true}
  },
  recipe_title:{
    type: String,
    required: true,  
    unique: true
  },
  recipe_description:{
    type: String,
    required: true,  
  },
  recipe_prep_time:{
    type: String,
    required: true,  
  },
  recipe_coock_time:{
    type: String,
    required: true,  
  },
  recipe_serving:{
    type: Number,
    required: true,  
  },
  recipe_ingridients:{
    type: String,
    required: true,  
  },
  recipe_tools: {
    type: String,
    required: true,  
  },
  recipe_author:{
    type: String, 
    required: true  
  },
  recipe_date:{
    type: Date,
    required: true, 
    trim: true,
    minlength: 3
  },
  recipe_cat_id:{
    type: String,
    required: true
  },
  recipe_tag_id:{
    type: String,
    required: true
  },
  recipe_cuisine_id:{
    type: String,
  },
  recipe_diet_id:{
    type: String,
  },
  recipe_ratting:{
    type: Number,
    required: true
  },
  recipe_views:{
    type: Number
  },
  recipe_img_url:{
    type: String
  }
});

const recipes_model = mongoose.model('recipe_repo', recipesSchema);

module.exports = recipes_model;