const uuid = require("uuid");
const recipes_model = require('../../models/recipe.model')
const recipe_steps_data_model = require('../../models/recipe-steps.model')
const recipe_ingridients_data_model = require('../../models/recipe-ingridients.model')
const recipe_cat_data_model = require('../../models/recipe-categories.model')
const recipe_sub_cat_data_model = require('../../models/recipe-sub-categories.model')
const recipe_tag_data_model = require('../../models/recipe-tags.model')
const recipe_tools_data_model = require('../../models/recipe-tools.model')
const recipe_nutrition_data_model = require('../../models/recipe-nutrition.model')
const recipes_cuisine_model = require("../../models/recipe-cuisine.model");
const recipes_tools_model = require("../../models/recipe-tools.model");
const recipes_diet_model = require("../../models/recipe-diet.model");

// ===============================================================================================================================================
//  RECIPE CONTROLLS =============================================================================================================================
// ===============================================================================================================================================
const saveRecipe = async (req, res, next) => { // SAVE RECIPE
    const recipeData = req.body[0]

    // console.log(JSON.stringify(req.body))

    const newDate = new Date();

    if (!req.body) throw new Error("please check that the correct fields have been filled: recipe title, recipe description, recipe_prep_time")

    // // LIST DATA 
    const recipeStepsData = recipeData.steps
    const recipeToolsData = recipeData.tools
    const recipe_ingridients = recipeData.ingridients

    // GET INGRIDIENTS IDs 
    let arrIngridientsIds = []
    recipe_ingridients.map(res => arrIngridientsIds.push(res.recipe_ingridient_id))

    // GET TOOLS IDs 
    let toolIds = []
    recipeToolsData.map(res => toolIds.push(res.tool_id))

    console.log(recipe_ingridients);

    const recipe_title = recipeData.info.recipe_title
    const recipe_description = recipeData.info.recipe_description
    const recipe_coock_time = recipeData.info.recipe_coock_time
    const recipe_prep_time = recipeData.info.recipe_prep_time
    const recipe_serving = recipeData.info.recipe_serving
    const recipe_ingridients_id = arrIngridientsIds.join()
    const recipe_tool_id = toolIds.join()
    const recipe_author = "recipe_author"
    const tagIds_arr = recipeData.tags
    const recipe_tag_id = tagIds_arr.join()
    const recipe_cuisine_id = recipeData.meta.recipe_cuisine_id
    const recipe_diet_id = recipeData.meta.recipe_diet_id
    const recipe_cat_id = recipeData.meta.recipe_cat_id
    const recipe_sub_cat_id = recipeData.meta.recipe_sub_cat_id
    const recipe_date = newDate
    const recipe_ratting_one = 0
    const recipe_ratting_two = 0
    const recipe_ratting_three = 0
    const recipe_ratting_four = 0
    const recipe_ratting_five = 0

    const newRecipe = new recipes_model({     //SAVE RECIPE  HERE
        recipe_title,
        recipe_description,
        recipe_prep_time,
        recipe_coock_time,
        recipe_serving,
        recipe_ingridients_id,
        recipe_tool_id,
        recipe_author,
        recipe_cat_id,
        recipe_sub_cat_id,
        recipe_tag_id,
        recipe_cuisine_id,
        recipe_diet_id,
        recipe_date,
        recipe_ratting
    })

    await newRecipe.save()
        .then(() => {     //SAVE RECIPE STEPS HERE

            recipeStepsData.map((data) => {

                const recipe_step_id = uuid.v4()
                const recipe_ref_id = recipe_id
                const recipe_step_no = data.recipe_step_no
                const recipe_step_description = data.recipe_step_description
                const recipe_step_videoUrl = data.recipe_step_videoUrl

                const newRecipeSteps = new recipe_steps_data_model({
                    recipe_step_id,
                    recipe_ref_id,
                    recipe_step_no,
                    recipe_step_description,
                    recipe_step_videoUrl
                })

                newRecipeSteps.save()

            })


        })
        .then(() => {     //SAVE NUTRITION HERE
            const recipe_ref_id = recipe_id
            const calories = recipeData.nutrition.recipe_calories
            const sodium = recipeData.nutrition.recipe_sodium
            const fat = recipeData.nutrition.recipe_fat
            const protein = recipeData.nutrition.recipe_protein
            const carbs = recipeData.nutrition.recipe_carbs
            const fiber = recipeData.nutrition.recipe_fiber

            const newTools = new recipe_nutrition_data_model({
                recipe_ref_id,
                calories,
                sodium,
                fat,
                protein,
                carbs,
                fiber
            })
            newTools.save()
                .catch((error) => next(error))


        })
        .then(() => res.json({ // RESPONSE HERE

            status: "success",
            message: "successfully saved recipe",
        }))
        .catch((error) => res.json({
            status: "error",
            message: "Unsuccessfully saved recipe",
            error
        }))

}

const updateRecipe = async (req, res, next) => { // UPDATE RECIPE

    let id = req.params.id

    const recipeData = req.body[0]

    // LIST DATA 
    const recipeStepsData = recipeData.steps
    const recipeToolsData = recipeData.tools
    const recipe_ingridients = recipeData.ingridients
    // console.log(recipeStepsData)
    // console.log(recipeStepsData[1].recipe_step_no)

    // GET TOOLS IDs 
    let toolIds = []
    recipeToolsData.map(res => toolIds.push(res.ToolID))

    recipes_model.findById(id)
        .then(updateRecipeRes => {
            updateRecipeRes.recipe_title = recipeData.info.recipe_title
            updateRecipeRes.recipe_description = recipeData.info.recipe_description
            updateRecipeRes.recipe_prep_time = recipeData.info.recipe_prep_time
            updateRecipeRes.recipe_coock_time = recipeData.info.recipe_coock_time
            updateRecipeRes.recipe_serving = recipeData.info.recipe_serving
            updateRecipeRes.recipe_ingridients_id = recipe_ingridients
            updateRecipeRes.recipe_tool_id = "4,5,6"
            updateRecipeRes.recipe_author = "recipe_author"
            updateRecipeRes.tagIds_arr = recipeData.tags
            updateRecipeRes.recipe_tag_id = recipeData.tags.join()
            updateRecipeRes.recipe_cuisine_id = recipeData.meta.recipe_cuisine_id
            updateRecipeRes.recipe_diet_id = recipeData.meta.recipe_diet_id
            updateRecipeRes.recipe_cat_id = recipeData.meta.recipe_cat_id
            updateRecipeRes.recipe_sub_cat_id = recipeData.meta.recipe_sub_cat_id
            updateRecipeRes.save()
                .then(  // UPDATE STEPS HERE

                    recipes_steps_model.find({ recipe_ref_id: "63da06d2-029f-4f67-a6ff-01ea7e085f7c" }, function (err, resf) {

                        if (err) {
                            console.log(err);
                        } else {
                            console.log(resf);

                            resf.map((resStepsUdt, index) => {

                                resStepsUdt.recipe_step_no = recipeStepsData[index].recipe_step_no,
                                    resStepsUdt.recipe_step_description = recipeStepsData[index].recipe_step_description,
                                    resStepsUdt.recipe_step_videoUrl = recipeStepsData[index].recipe_step_videoUrl,
                                    resStepsUdt.save()
                                        .then(() => console.log("Recipe steps Updated"))
                                        .catch((error) => next(error))

                            })
                        }
                    })


                )
                .then(  // UPDATE NUTRITION HERE

                    recipe_nutrition_data_model.find({ recipe_ref_id: updateRecipeRes.recipe_id }, function (err, resf) {

                        recipe_nutrition_data_model.findById()
                        resf.map((res2, index) => {

                            res2.calories = recipeData.nutrition.recipe_calories
                            res2.sodium = recipeData.nutrition.recipe_sodium,
                                res2.fat = recipeData.nutrition.recipe_fat,
                                res2.protein = recipeData.nutrition.recipe_protein,
                                res2.carbs = recipeData.nutrition.recipe_carbs,
                                res2.fiber = recipeData.nutrition.recipe_fiber,
                                res2.save()
                                    .then(() => console.log("saved"))
                                    .catch((error) => next(error))

                        })

                    })

                )
                .then((updateRecipeRes) => res.json({ // SUCCESS RESPONSE

                    status: "success",
                    message: "successfully updated recipe"

                }))
                .catch((error) => next(error))
        })
        .catch(error => res.status(400).json({ 
            status: 'fail', 
            error_status: res.status, 
            error 
    }))

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
        const recipe_cat_title = req.body.recipe_cat_title
        const recipe_cat_desc = req.body.recipe_cat_desc

        const newCat = new recipe_cat_data_model({
            recipe_cat_title,
            recipe_cat_desc
        })

        newCat.save()
            .then(() =>
                res.json({

                    status: "success",
                    message: "successfully saved category",

                }))


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

        const recipe_cat_id = req.body.recipe_cat_id
        const recipe_cat_title = req.body.recipe_cat_title

        const newSubCat = new recipe_sub_cat_data_model({
            recipe_cat_id,
            recipe_cat_title
        })

        newSubCat.save()
            .then(() =>
                res.json({

                    status: "success",
                    message: "successfully saved Sub category",
                    tags: recipe_cat_title

                }))


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
        console.log(req.body)
        console.log(req.body.recipe_tag_title)


        const recipe_tag_id = uuid.v4()
        const recipe_tag_title = req.body.recipe_tag_title

        const newTag = new recipe_tag_data_model({
            recipe_tag_id,
            recipe_tag_title
        })

        newTag.save()
            .then(() =>
                res.json({

                    status: "success",
                    message: "successfully saved category",
                    tag: recipe_tag_title

                }))
        // .then(() =>
        //     res.json({

        //         status: "success",
        //         message: "successfully saved tag",
        //         tags: recipe_tag_title

        //     }))
        // .catch(err => next())


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to tag ")
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

        const recipe_ingridient_id = uuid.v4()
        const recipe_ingridient_title = req.body.recipe_ingridient_title
        const recipe_ingridient_descprition = req.body.recipe_ingridient_descprition
        const si_unit = req.body.si_unit
        const quantity = req.body.quantity
        const recipe_ingridient_cost = 00
        const recipe_ingridient_store = ""

        const newIngridient = new recipe_ingridients_data_model({
            recipe_ingridient_id,
            recipe_ingridient_title,
            recipe_ingridient_descprition,
            si_unit,
            quantity,
            recipe_ingridient_cost,
            recipe_ingridient_store
        })

        newIngridient.save()
            .then(() =>
                res.json({
                    status: "success",
                    message: "successfully saved ingridient",
                    tags: {
                        "recipe_title": recipe_ingridient_title
                    }

                }))


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
        console.log(req.body)

        const cuisine_id = uuid.v4()
        const cuisine_title = req.body.cuisine_title
        const cuisine_country = req.body.cuisine_country

        const newIngridient = new recipes_cuisine_model({
            cuisine_id,
            cuisine_title,
            cuisine_country
        })

        newIngridient.save()
            .then(() =>
                res.json({
                    status: "success",
                    message: "successfully saved cuisine: " + cuisine_title,
                    cuisine: {
                        "title": cuisine_title,
                        "country": cuisine_country,
                    }

                }))


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
//  RECIPE CUISINE CONTROLLS =====================================================================================================================
// ===============================================================================================================================================
const saveDiet = (req, res) => {
    try {
        console.log(req.body)
        console.log(req.body.diet_title)

        const diet_id = uuid.v4()
        const diet_title = req.body.diet_title
        const diet_description = req.body.diet_description

        const newDiet = new recipes_diet_model({
            diet_id,
            diet_title,
            diet_description
        })

        newDiet.save()
            .then(() =>
                res.json({
                    status: "success",
                    message: "successfully saved cuisine: " + diet_title,
                    diet: {
                        "title": diet_title,
                        "description": diet_description,
                    }

                }))


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
//  RECIPE STEPS DATA ============================================================================================================================
// ===============================================================================================================================================

const updateRecipeSteps = async (req, res, next) => { // UPDATE RECIPE

    let recipeId = req.params.id

}

// ===============================================================================================================================================
//  RECIPE TOOLS DATA ============================================================================================================================
// ===============================================================================================================================================

const saveTools = (req, res) => {
    try {
        console.log(req.body)

        const tool_id = uuid.v4()
        const tool_title = req.body.toolTitle
        const tool_description = req.body.toolDesc

        const newTool = new recipes_tools_model({
            tool_id,
            tool_title,
            tool_description
        })

        newTool.save()
            .then(() =>
                res.json({

                    status: "success",
                    message: "successfully saved tool",
                    tool: {
                        "tool": tool_title
                    }

                }))


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