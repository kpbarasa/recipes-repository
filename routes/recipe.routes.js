express = require('express')
const router = express.Router()

const {
    getRecipe,
    getRecipes,
    getRecipeTag,
    getRecipeCat,
} = require('../controllers/recipe.controllers')

// Recipe routes here 
router.get('/get/recipes', getRecipes)
router.get('/get/recipe/:id', getRecipe)
router.get('/get/recipes/cat/:catId', getRecipeCat)
router.get('/get/recipes/tag/:tagId', getRecipeTag)

module.exports = router