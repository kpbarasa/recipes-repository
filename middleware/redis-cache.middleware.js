const mongoose = require("mongoose")
const recipes_model = require('../models/recipe.model')
const redisCache = require("../reddis/reddis-cache")
const recipeFormat = require('../utils/recipe-format')

module.exports = async (req, res, next) => {

        const recipesData = await recipes_model.find()

        let arrRecipe =[];

        if (!recipesData) throw "Error no recipes found";

        recipesData.map(async (recipe) => {
            
            arrRecipe.push(recipeFormat(
                recipe._id, 
                recipe.recipe_title, 
                recipe.recipe_description, 
                recipe.recipe_author, 
                recipe.recipe_cat_id, 
                recipe.recipe_tag_id, 
                recipe.recipe_cuisine_id, 
                recipe.recipe_diet_id,
                0));

        })
        
        // console.log(arrRecipe);
        await redisCache(arrRecipe);

        next();
};  