express= require('express')
const router = express.Router()

const checkID = require("../middleware/check_id")

// RECIPE CONTROLLERS
const recipeAdminControllers = require('../controllers/recipe-admin-controllers/admin.controllers');


// RECIPE ROUTES
router.post('/post/recipe', recipeAdminControllers.saveRecipe)
router.post('/update/recipe/:id', checkID, recipeAdminControllers.updateRecipe)
router.get('/del/recipe/:id', checkID, recipeAdminControllers.deleteRecipe)

// CATEGORIES 
router.post('/post/cat', recipeAdminControllers.saveRecipeCat)
router.post('/delete/cat/:id', recipeAdminControllers.deleteRecipeCat)

// SUB CATEGORIES 
router.post('/post/sub-cat', recipeAdminControllers.saveRecipeSubCat)
router.post('/delete/sub-cat/:id', recipeAdminControllers.deleteRecipeSubCat)

// TAGS 
router.post('/post/tags', recipeAdminControllers.saveRecipeTag)
router.post('/delete/tags/:id', recipeAdminControllers.deleteRecipeTag)

// CUISINES 
router.post('/post/cuisine', recipeAdminControllers.saveCuisine)
router.post('/delete/cuisine/:id', recipeAdminControllers.deleteCuisine)

// DIETS 
router.post('/post/diet', recipeAdminControllers.saveDiet)
router.post('/delete/diet/:id', recipeAdminControllers.deleteDiet)

// TOOLS
router.post('/post/tool', recipeAdminControllers.saveTools)
router.post('/delete/tool/:id', checkID, recipeAdminControllers.deleteTool)

// INGRIDIENTS 
router.post('/post/ingridient', recipeAdminControllers.saveIngridient)
router.post('/delete/ingridient/:id', checkID, recipeAdminControllers.deleteIngridient)

module.exports = router