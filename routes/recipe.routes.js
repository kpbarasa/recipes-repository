express = require('express')
const router = express.Router()

// RECIPE CONTROLLERS
const recipeControllers = require("../controllers/recipe-controllers/recipe.controllers");

// MIDLEWARE
const checkID = require("../middleware/check_id")

// RECIPE ROUTES
router.get('/get/recipes', recipeControllers.getRecipes) // GET ALL RECIPES
router.get('/get/recipe/:id', checkID, recipeControllers.getRecipe) // FILTER BY RECIPE  ID
router.get('/get/recipes/tag/:id', checkID, recipeControllers.getRecipeTag) // FILTER BY TAG ID
router.get('/get/recipes/cat/:id', checkID, recipeControllers.getRecipeCat) // FILTER BY  CAT ID
router.get('/get/recipes/subcat/:id', checkID, recipeControllers.getRecipeSubCat) // FILTER BY  SUB-CAT ID
router.get('/get/recipes/cuisine/:id', checkID, recipeControllers.getRecipeCuisine) // FILTER BY CUISINE ID
router.get('/get/recipes/diet/:id', checkID, recipeControllers.getRecipeDiet) // FILTER BY DIET ID

// CATEGORIES 
router.get('/get/cats', recipeControllers.getAllCats) // GET ALL CATEGORIES
router.get('/get/cat/:id', checkID, recipeControllers.getCat) // FILTER CATEGORY BY ID

// SUB CATEGORIES 
router.get('/get/sub-cats', recipeControllers.getAllSubCats) // GET ALL SUB CATEGORIES
router.get('/get/sub-cat/:id', checkID, checkID, recipeControllers.getSubCat) // FILTER SUB CATEGORY BY ID

// TAGS 
router.get('/get/tags', recipeControllers.getAllTags) // GET ALL TAGS
router.get('/get/tag/:id', checkID, recipeControllers.getTag) // FILTER TAG BY ID

// CUISINES 
router.get('/get/cuisines', recipeControllers.getAllCuisines) // GET ALL CUISINES
router.get('/get/cuisines/:id', checkID, recipeControllers.getCuisine) // FILTER CUISINE BY ID

// DIETS 
router.get('/get/diets', recipeControllers.getAllDiets) // GET ALL DIETS
router.get('/get/diet/:id', checkID, recipeControllers.getDiet) // FILTER DIET BY ID

// INGRIDIENTS 
router.get('/get/ingridients', recipeControllers.getAllIngridients) // GET ALL INGRIDIENTS
router.get('/get/ingridients/:id', checkID, recipeControllers.getRecipeIngridient)// FILTER INGRIDIENTS BY ID

// TOOLS
router.get('/get/tools', recipeControllers.getAllTools) // GET ALL TOOLS
router.get('/get/tools/:id', checkID, recipeControllers.getRecipeTools) // FILTER TOOLS BY ID

// NUTRITION 
router.get('/get/nutrition', recipeControllers.getALLNutrition) // FILTER NUTRITION BY ID
router.get('/get/nutrition/:id', checkID, recipeControllers.getRecipeNutrition) // FILTER NUTRITION BY ID

// STEPS 
router.get('/get/steps/:id', checkID, recipeControllers.getRecipeSteps) // FILTER STEPS BY ID

module.exports = router