const recipeDataModel = require('../../models/recipe.model')
const recipes_steps_model = require('../../models/recipe-steps.model')
const recipes_ingridients_model = require('../../models/recipe-ingridients.model')
const recipes_tools_model = require('../../models/recipe-tools.model')
const recipes_nutrition_model = require('../../models/recipe-nutrition.model')
const recipes_cuisine_model = require('../../models/recipe-cuisine.model')
const recipes_diet_model = require('../../models/recipe-diet.model')
const recipes_tags_model = require('../../models/recipe-tags.model')
const recipes_categories_model = require('../../models/recipe-categories.model')
const recipes_sub_categories_model = require('../../models/recipe-sub-categories.model')


// ===============================================================================================================================================
//  GET RECIPE CONTROLLS =========================================================================================================================
// ===============================================================================================================================================

const getRecipes = async (req, res) => { // Get recipes

    await recipeDataModel.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ message: "success", recipes: recipeRes })

        })
        .catch(err => res.status(400).json('Error: ' + err + " Sorry unable to get recipes right now"))
}

const getRecipe = (req, res) => { // Get recipes : recipe id

    try {

        let recipeId = req.params.id

        recipeDataModel.findOne({ _id: recipeId }, function (err, recipeRes) {

            if (err) throw new Error();

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            res.json({ status: "success", message: "success", recipe: recipeRes });
            console.log(recipeRes);

        })

    } catch (error) {

        res.status(400).json({ status: 'fail', error_status: res.status, error: "Sorry there is no recipes available right now" });

    }
}

const getRecipeCat = (req, res) => { // Get Recipe : category id

    try {

        let recipeCatId = req.params.id

        recipeDataModel.findOne({ recipe_cat_id: recipeCatId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            else return res.json({ message: "success", recipes: recipeRes });

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now");

    }
}

const getRecipeSubCat = (req, res) => {// Get Recipe : sub category id

    try {

        let recipeCatId = req.params.catId

        recipeDataModel.findOne({ recipe_sub_cat_id: id }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            else return res.json({ message: "success", recipes: recipeRes });

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now");

    }
}

const getRecipeTag = (req, res) => { // Get Recipe : tag id

    try {

        let recipeCatId = req.params.id
        console.log(recipeCatId)

        recipeDataModel.findOne({ recipe_tag_id: recipeCatId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            else return res.json({ message: "success", recipes: recipeRes });

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now")

    }
}

const getRecipeCuisine = (req, res) => { // Get Recipe : cuisine id

    try {

        let cuisineId = req.params.id
        console.log(cuisineId)

        recipeDataModel.findOne({ recipe_cuisine_id: cuisineId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            else return res.json({ message: "success", recipes: recipeRes });

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now");

    }
}

const getRecipeDiet = (req, res) => { // Get Recipe : diet id

    try {

        let dietId = req.params.id
        console.log(cuisineId)

        recipes_diet_model.findOne({ recipe_diet_id: dietId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            else return res.json({ message: "success", recipes: recipeRes });

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now")

    }
}

// ===============================================================================================================================================
//  RECIPE CATEGORIES CONTROLLS ========================================================================================================================
// ===============================================================================================================================================
const getAllCats = async (req, res) => {

    await recipes_categories_model.find()
        .then(recipeRes => {

            if (!recipeRes) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", categories: recipeRes })

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }))

}

const getCat = async (req, res) => {

    try {

        let id = req.params.id

        console.log(id)

        await recipes_categories_model.find({ recipe_cat_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", category: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

const getAllSubCats = async (req, res) => {

    await recipes_sub_categories_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", sub_categories: recipeRes });

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }));

}

const getSubCat = async (req, res) => {

    try {

        let id = req.params.id

        console.log(id)

        await recipes_sub_categories_model.find({ recipe_cat_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", sub_category: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

// ===============================================================================================================================================
//  RECIPE TAGS CONTROLLS ========================================================================================================================
// ===============================================================================================================================================
const getAllTags = async (req, res, next) => {

    await recipes_tags_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", tags: recipeRes })

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }))

}

const getTag = async (req, res) => {

    try {

        let id = req.params.id

        console.log(id)

        await recipes_tags_model.find({ cuisine_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", tag: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

// ================================================================================================================================================
//  RECIPE CUISINE CONTROLLS ======================================================================================================================
// ================================================================================================================================================
const getAllCuisines = async (req, res, next) => {

    await recipes_cuisine_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now"

            console.log(recipeRes);
            res.json({ status: "success", message: "success", cuisines: recipeRes })

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }))

}

const getCuisine = async (req, res) => {

    try {

        let id = req.params.id

        console.log(id)

        await recipes_cuisine_model.find({ cuisine_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", cuisine: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

// ================================================================================================================================================
//  RECIPE DIETS CONTROLLS ========================================================================================================================
// ================================================================================================================================================
const getAllDiets = async (req, res, next) => {

    await recipes_diet_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" });

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", diets: recipeRes });

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }));

}

const getDiet = async (req, res) => {

    try {

        let id = req.params.id

        console.log(id)

        await recipes_diet_model.find({ cuisine_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", diet: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

// ===============================================================================================================================================
//  RECIPE STEPS, TOOLS, INGRIDIENTS, NUTRITION, CONTROLLS ==================================================================================================================
// ===============================================================================================================================================

const getRecipeSteps = (req, res) => { // Get Recipe : diet id

    try {

        let dietId = req.params.id
        console.log(dietId)

        recipes_steps_model.find({ recipe_ref_id: dietId }, function (err, recipeRes) {

            console.log(recipeRes)

            return res.json({ status: "success", message: "success", steps: { recipeRes } })

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

const getRecipeIngridient = (req, res) => { // Get Recipe : diet id

    try {

        let id = req.params.id
        console.log(id)

        recipes_ingridients_model.find({ recipe_ingridient_id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", ingridient: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

const getAllIngridients = async (req, res, next) => {

    await recipes_ingridients_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", ingridients: recipeRes });

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }));

}

const getRecipeTools = (req, res) => { // Get Recipe : diet id

    try {

        let id = req.params.id
        console.log(id)

        recipes_tools_model.find({ _id: id }, function (err, recipeRes) {

            return res.json({ status: "success", message: "success", tool: recipeRes })

            console.log(recipeRes)

        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}

const getAllTools = async (req, res, next) => {

    await recipes_tools_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", tools: recipeRes });

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }));

}

const getALLNutrition = async (req, res) => {

    await recipes_nutrition_model.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw "Sorry there is no recipes available right now";

            console.log(recipeRes);
            res.json({ status: "success", message: "success", nutrition: recipeRes });

        })
        .catch(error => res.status(400).json({ status: 'fail', error_status: res.status, error: error }));

}

const getRecipeNutrition = (req, res) => { // Get Nutrition : recipe id

    try {

        let id = req.params.id
        console.log(id)

        recipes_nutrition_model.find({ recipe_ref_id: id }, function (err, recipeRes) {

            console.log(recipeRes)

            res.json({ status: "success", message: "success", nutrition: recipeRes[0] })


        })

    } catch (error) {
        res.status(400).json({ status: 'fail', error_status: res.status, error: error })

    }
}


module.exports = {
    
    //  GET RECIPE CONTROLLS =========================================================================================================================
    getRecipe,
    getRecipes,
    getRecipeCat,
    getRecipeSubCat,
    getRecipeTag,
    getRecipeCuisine,
    getRecipeDiet,
    
    
    //  RECIPE CATEGORIES CONTROLLS ========================================================================================================================
    getAllCats,
    getCat,
    getAllSubCats,
    getSubCat,
    
    //  RECIPE TAGS CONTROLLS ========================================================================================================================
    getAllTags,
    getTag,
    
    //  RECIPE CUISINE CONTROLLS ======================================================================================================================
    getAllCuisines,
    getCuisine,
    
    //  RECIPE DIETS CONTROLLS ========================================================================================================================
    getAllDiets,
    getDiet,
    
    //  RECIPE STEPS, TOOLS, INGRIDIENTS, NUTRITION, CONTROLLS ==================================================================================================================
    getRecipeSteps,
    getRecipeIngridient,
    getAllIngridients,
    getAllTools,
    getRecipeTools,
    getALLNutrition,
    getRecipeNutrition
}