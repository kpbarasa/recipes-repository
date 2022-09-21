const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipesSchema = new Schema({

  recipe_title:{
    type: String,
    required: "recipe title is required !",
    unique: true
  },
  recipe_description:{
    type: String,
    required: "recipe Description is required !",
  },
  recipe_prep_time:{
    type: String,
    required: "recipe prep time is required !", 
  },
  recipe_coock_time:{
    type: String,
    required: "recipe coock time is required !",
  },
  recipe_serving:{
    type: Number,
    required: "recipe serving is required !",
  },
  recipe_ingridients:{
    type: Array,
    required: "recipe ingridienta are required !",
  },
  recipe_tools: {
    type: Array,
    required: "recipe tools is required !",
  },
  recipe_author:{
    type: String, 
    required: "recipe author is required !", 
  },
  recipe_cat_id:{
    type: mongoose.Schema.Types.ObjectId,
    required: "recipe cat is required !",
  },
  recipe_cat_id:{
    type: mongoose.Schema.Types.ObjectId,
    required: "recipe Category is required !",
  },
  recipe_tag_id:{
    type: Array,
    required: "at least one recipe tag is required !",
  },
  recipe_cuisine_id:{
    type: mongoose.Schema.Types.ObjectId,
    required: "recipe cuisine is required !",
  },
  recipe_diet_id:{
    type: mongoose.Schema.Types.ObjectId,
    required: "recipe diet is required !",
  },
  recipe_views:{
    type: Number
  },
  recipe_img_url:{
    type: String
  }
  
},{
  timestamps: true
});

const recipes_model = mongoose.model('recipes', recipesSchema);

module.exports = recipes_model;