const mongoose = require('mongoose');
const recipes_model = require('../../models/recipe.model');
const recipes_diet_model = require("../../models/recipe-diet.model");
const recipes_tools_model = require("../../models/recipe-tools.model");
const recipe_tag_data_model = require('../../models/recipe-tags.model');
const recipe_steps_data_model = require('../../models/recipe-steps.model');
const recipe_tools_data_model = require('../../models/recipe-tools.model');
const recipes_cuisine_model = require("../../models/recipe-cuisine.model");
const recipe_cat_data_model = require('../../models/recipe-categories.model');
const recipe_nutrition_data_model = require('../../models/recipe-nutrition.model');
const recipe_ingridients_data_model = require('../../models/recipe-ingridients.model');
const recipe_sub_cat_data_model = require('../../models/recipe-sub-categories.model');

// ===============================================================================================================================================
//  RECIPE CONTROLLS =============================================================================================================================
// ===============================================================================================================================================
const saveRecipe = async (req, res, next) => { // SAVE RECIPE

    const { recipe_info, recipe_ingridients_id_list, recipe_tool_id_list, recipe_tag_id_list, recipe_steps, recipe_nutrition } = req.body;

    // const userID = !req.session.sessId ? "author" : req.session.sessId;
    const userID = "author";

    // generate ID (Mongoose id object)
    const mongooseObj_Id = mongoose.Types.ObjectId();

    try {

        // Check if request has body
        if (!req.body) throw "please check that the correct fields have been filled: recipe title, recipe description, recipe_prep_time"

        // Check if recipe exists
        const recipeExists = await recipes_model.find({ recipe_title: recipe_info.recipe_title })
        if (recipeExists.length > 0) throw "error recipe title already exixts";

        // Recipe Data Object 
        const newRecipe = new recipes_model({     //SAVE RECIPE  HERE
            _id: mongooseObj_Id,
            recipe_title: recipe_info.recipe_title,
            recipe_description: recipe_info.recipe_description,
            recipe_prep_time: recipe_info.recipe_prep_time,
            recipe_coock_time: recipe_info.recipe_coock_time,
            recipe_serving: recipe_info.recipe_serving,
            recipe_author: userID,
            recipe_cat_id: recipe_info.recipe_cat_id,
            recipe_sub_cat_id: recipe_info.recipe_sub_cat_id,
            recipe_ingridients_id: JSON.stringify(recipe_ingridients_id_list),
            recipe_tool_id: JSON.stringify(recipe_tool_id_list),
            recipe_tag_id: JSON.stringify(recipe_tag_id_list),
            recipe_cuisine_id: recipe_info.recipe_cuisine_id,
            recipe_diet_id: recipe_info.recipe_diet_id,
        })

        // Save recipe 
        newRecipe.save(async function (err, result) {

            if (err) throw err;

            const recipeData = await recipes_model.findOne({ recipe_title: recipe_info.recipe_title });

            saveNutrition(recipe_nutrition, recipeData._id);
            saveSteps(recipe_steps, recipeData._id);

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved recipe , nutrition and steps"

            })
        })


    }
    catch (error) {
        res.status(400).json({
            status: 'fail',
            error_status: res.status,
            error
        })
    }

    // SAVE RECIPE NUTRITION FUNCTION
    async function saveNutrition(nutrition, recipe_id) {

        const recipeNutrition = new recipe_nutrition_data_model({
            recipe_ref_id: recipe_id,
            calories: nutrition.calories,
            sodium: nutrition.sodium,
            fat: nutrition.fat,
            protein: nutrition.protein,
            carbs: nutrition.carbs,
            fiber: nutrition.fiber
        })
        recipeNutrition.save(function (err, result) {
            if (err) throw err;
            console.log("Recipe Nutrition Saved")
        })

    }

    // SAVE RECIPE STEPS FUNCTION
    async function saveSteps(recipe_steps, recipe_id) {

        recipe_steps.map((recipe) => {

            const newRecipeSteps = new recipe_steps_data_model({

                recipe_ref_id: recipe_id,
                recipe_step_no: recipe.recipe_step_no,
                recipe_step_description: recipe.recipe_step_description,
                recipe_step_videoUrl: recipe.recipe_step_videoUrl

            })

            newRecipeSteps.save(function (err, result) {

                if (err) throw err;

            })

            console.log("Recipe Nutrition Saved")

        })

    }

}

const updateRecipe = async (req, res, next) => { // UPDATE RECIPE
    const { recipe_info, recipe_ingridients_id_list, recipe_tool_id_list, recipe_tag_id_list, recipe_steps, recipe_nutrition } = req.body;

    // const userID = !req.session.sessId ? "author" : req.session.sessId;
    const userID = "author";

    // Get recipe id (request url parameter) 
    const recipe_id = req.params.id

    try {
        // Check if recipe exists
        const recipeExists = await recipes_model.find({ _id: recipe_id })
        if (!recipeExists.length > 0) throw "error recipe title does not exixts";

        recipes_model.findById(recipe_id)
            .then(update => {
                update.recipe_title = recipe_info.recipe_title
                update.recipe_description = recipe_info.recipe_description
                update.recipe_prep_time = recipe_info.recipe_prep_time
                update.recipe_coock_time = recipe_info.recipe_coock_time
                update.recipe_serving = recipe_info.recipe_serving
                update.recipe_author = userID
                update.recipe_cuisine_id = recipe_info.recipe_cuisine_id
                update.recipe_diet_id = recipe_info.recipe_diet_id
                update.recipe_cat_id = recipe_info.recipe_cat_id
                update.recipe_sub_cat_id = recipe_info.recipe_sub_cat_id
                update.recipe_tag_id = JSON.stringify(recipe_ingridients_id_list)
                update.recipe_ingridients_id = JSON.stringify(recipe_ingridients_id_list)
                update.recipe_tool_id = JSON.stringify(recipe_ingridients_id_list)

                update.save(async function (err, result) {

                    if (err) throw err;

                    // const recipeData = await recipes_model.findOne({ recipe_title: recipe_info.recipe_title });


                    await updateNutrition(recipe_nutrition);

                    await updateSteps(recipe_steps);

                    res.json({ // RESPONSE HERE

                        status: "success",
                        message: "successfully updated recipe , nutrition and steps"

                    })

                })


                // UPDATE RECIPE NUTRITION FUNCTION
                async function updateNutrition(updated) {

                    await recipe_nutrition_data_model.findOne({ recipe_ref_id: recipe_id })
                        .then(update => {
                            update.calories = updated.calories,
                                update.sodium = updated.calories,
                                update.fat = updated.calories,
                                update.protein = updated.calories,
                                update.carbs = updated.calories,
                                update.fiber = updated.calories,

                                update.save(function (err, results) {
                                    if (err) throw err;
                                    console.log("Nutrition updated")
                                })
                        })
                }

                // UPDATE RECIPE STEPS FUNCTION
                function updateSteps(updatedSteps) {

                    if (!updatedSteps.length) next();

                    updatedSteps.map(async (updated, index) => {

                        recipe_steps_data_model.find({ recipe_ref_id: recipe_id })
                            .then((update) => {
                                update.recipe_step_no = updated.recipe_step_no,
                                    update.recipe_step_description = updated.recipe_step_description,
                                    update.recipe_step_videoUrl = updated.recipe_step_videoUrl,

                                    update.save()
                            })

                    })
                }
            })

    }
    catch (error) {

        res.status(400).json({
            status: 'fail',
            error_status: res.status,
            error
        })

    }


}

const deleteRecipe = async (req, res, next) => { //DELETE ALL RECIPE DATA
    try {

        let recipeId = req.params.id

        recipes_model.remove({ recipe_id: recipeId }, function (err, deleteResData) {

            if (err) {
                throw new Error()
            } else {
                next();
            }

        })

        recipe_steps_data_model.remove({ recipe_ref_id: recipeId }, function (err, deleteStepsData) {

            if (err) {
                throw new Error()
            } else {
                next();
            }

        })

        recipe_nutrition_data_model.remove({ recipe_ref_id: recipeId }, function (err, deleteNutData) {

            if (err) {
                throw new Error()
            } else {
                next();
            }

        })

        recipe_tools_data_model.remove({ recipe_ref_id: recipeId }, function (err, deleteNutData) {

            if (err) {
                throw new Error()
            } else {
                next();
            }

        })

        res.json({ message: "success", description: "all recipe info deleted" })

    } catch (error) {
        res.status(400).json(+ error + " - Sorry unable to delete recipe")
    }

}

// ===============================================================================================================================================
//  RECIPE CATEGORIES CONTROLLS ==================================================================================================================
// ===============================================================================================================================================
const saveRecipeCat = async (req, res) => {
    try {
        const {recipe_cat_title, recipe_cat_desc} = req.body

        const newCat = new recipe_cat_data_model({
            recipe_cat_title,
            recipe_cat_desc
        })

        newCat.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved category",

            })
        })


    } catch (error) {

        res.status(400).json({
            status: 'fail',
            error_status: res.status,
            error
        })
    }
}

const saveRecipeSubCat = async (req, res) => {
    try {

        const {recipe_cat_id, recipe_cat_title} = req.body

        const newSubCat = new recipe_sub_cat_data_model({
            recipe_cat_id,
            recipe_cat_title
        })

        newSubCat.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved sub category",

            })
        })


    } catch (error) {

        res.status(400).json({
            status: 'fail',
            error_status: res.status,
            error
        })
    }
}

const deleteRecipeCat = (req, res) => {

    let recipeCatId = req.params.id

    recipes_model.findByIdAndDelete(recipeCatId)
        .then((categoryRes => res.json({ status: "success", message: "success category deleted", category: categoryRes })))
        .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}

const deleteRecipeSubCat = (req, res) => {

    let recipeSubCatId = req.params.id

    recipe_sub_cat_data_model.findByIdAndDelete(recipeSubCatId)
        .then((subCategory_Res => res.json({ status: "success", message: "success category deleted", subCategory: subCategory_Res })))
        .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}

// ===============================================================================================================================================
//  RECIPE TAGS CONTROLLS ========================================================================================================================
// ===============================================================================================================================================
const saveRecipeTag = (req, res, next) => {
    try {
        const recipe_tag_title = req.body;

        const newTag = new recipe_tag_data_model({
            recipe_tag_title
        })

        newTag.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved recipe tag",

            })
        })


    } catch (error) {

        res.status(400).json({
            status: 'fail',
            error_status: res.status,
            error
        })
    }
}

const deleteRecipeTag = (req, res) => {

    let recipeTagId = req.params.id

    recipes_model.findByIdAndDelete(recipeTagId)
        .then((tagRes => res.json({ status: "success", message: "success tag deleted", tag: tagRes })))
        .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}

// ===============================================================================================================================================
//  RECIPE INGRIDIENTS CONTROLLS =================================================================================================================
// ===============================================================================================================================================
const saveIngridient = (req, res) => {
    try {

        const {recipe_ingridient_title, recipe_ingridient_descprition, si_unit, quantity} = req.body;
        const recipe_ingridient_cost = 00;
        const recipe_ingridient_store = "";

        const newIngridient = new recipe_ingridients_data_model({
            recipe_ingridient_title,
            recipe_ingridient_descprition,
            si_unit,
            quantity,
            recipe_ingridient_cost,
            recipe_ingridient_store
        })

        newIngridient.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved recipe ingridient"+ recipe_ingridient_title,

            })
        })


    } catch (error) {

        res.status(400).json({ status: 'fail', error_status: res.status, error: error })
    }
}

const deleteIngridient = (req, res) => {

    let ingrdId = req.params.id

    recipe_ingridients_data_model.findByIdAndDelete(ingrdId)
        .then((ingridientRes => res.json({ message: "success ingridient deleted", ingridient: ingridient })))
        .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete ingridient"))

}

// ===============================================================================================================================================
//  RECIPE CUISINE CONTROLLS =====================================================================================================================
// ===============================================================================================================================================
const saveCuisine = (req, res) => {
    try {

        const {cuisine_title, cuisine_country} = req.body

        const newIngridient = new recipes_cuisine_model({
            cuisine_title,
            cuisine_country
        })

        newIngridient.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved cuisine: " + cuisine_title,
                cuisine: {
                    "title": cuisine_title,
                    "country": cuisine_country,
                }

            })
        })


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to saved cuisine ")
    }
}

const deleteCuisine = (req, res) => {

    let cuisineId = req.params.id

    recipes_cuisine_model.findByIdAndDelete(cuisineId)
        .then((cuisineRes => res.json({ message: "success ingridient deleted", cuisine: cuisineRes.cuisine_title })))
        .catch(err => res.status(404).json('Error: ' + err + "Sorry unable to delete ingridient"))

}

// ===============================================================================================================================================
//  RECIPE DIET CONTROLLS =====================================================================================================================
// ===============================================================================================================================================
const saveDiet = (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body.diet_title)

        const {diet_title, diet_description} = req.body

        const newDiet = new recipes_diet_model({
            diet_title,
            diet_description
        })

        newDiet.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved cuisine: " + diet_title,
                diet: {
                    "title": diet_title,
                    "description": diet_description,
                }

            })
        })

    } catch (error) {

        res.status(400).json({ status: 'fail', error_status: res.status, error: error })
    }
}

const deleteDiet = (req, res) => {

    let id = req.params.id

    recipes_diet_model.findByIdAndDelete(id)
        .then((dietRes => res.json({ status: "success", message: "success ingridient deleted", cuisine: dietRes.diet_title })))
        .catch(err => res.status(400).json({ status: 'fail', error_status: res.status, error: error }))

}


// ===============================================================================================================================================
//  RECIPE TOOLS DATA ============================================================================================================================
// ===============================================================================================================================================

const saveTools = (req, res) => {
    try {

        const {tool_title, tool_description} = req.body

        const newTool = new recipes_tools_model({
            tool_title,
            tool_description
        })

        newTool.save(async function (err, result) {

            if (err) throw err;

            res.json({ // RESPONSE HERE

                status: "success",
                message: "successfully saved tool",
                tool: {
                    "tool": tool_title
                }


            })
        })


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to tag ")
    }
}

const deleteTool = (req, res) => {

    let toolId = req.params.id

    recipes_tools_model.findByIdAndDelete(toolId)
        .then((tool => res.json({ message: "success ingridient deleted", tool: tool })))
        .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete ingridient"))

}

module.exports = {
    saveRecipe,
    updateRecipe,
    deleteRecipe,
    saveRecipeCat,
    saveRecipeSubCat,
    saveRecipeTag,
    saveIngridient,
    saveCuisine,
    saveTools,
    saveDiet,
    deleteIngridient,
    deleteRecipeCat,
    deleteRecipeSubCat,
    deleteRecipeTag,
    deleteCuisine,
    deleteTool,
    deleteDiet
}