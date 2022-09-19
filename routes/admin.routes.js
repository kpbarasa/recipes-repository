express= require('express')
const router = express.Router()

const checkID = require("../middleware/check_id")

const { 
    saveRecipe,
    updateRecipe,
    deleteRecipe,
    saveRecipeCat,
    saveRecipeSubCat,
    saveRecipeTag,
    saveIngridient,
    deleteIngridient,
    deleteRecipeCat,
    deleteRecipeSubCat,
    deleteRecipeTag
} = require('../controllers/admin.controllers')


router.post('/add/recipe', saveRecipe)

router.post('/update/recipe/:recipeId', checkID, updateRecipe)

router.get('/delete/recipe/:recipeId', checkID, deleteRecipe)

router.post('/add/category', saveRecipeCat)

router.post('/add/sub-category/', saveRecipeSubCat)

router.post('/delete/category/:catId', checkID, deleteRecipeCat)

router.post('/delete/sub-category/:subCatId', checkID, deleteRecipeSubCat)

router.post('/add/tags', saveRecipeTag)

router.post('/delete/tags/:tagId', checkID, deleteRecipeTag)

module.exports = router