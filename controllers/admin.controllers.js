const uuid = require("uuid");
const recipeDataModel = require('../models/recipe.model')
const recipeStepsDataModel = require('../models/recipe_steps.model')
const recipeIngridientsDataModel = require('../models/recipe_ingridients.model')
const recipeCatDataModel = require('../models/categories.model')
const recipeSubCatDataModel = require('../models/sub_categories.model')
const recipeTagDataModel = require('../models/tags.model')
const mongoose = require("mongoose")

const saveRecipe = (req, res, next) => {
    try {

        if (!req.body.recipe_title) throw new Error("please check that the correct fields have been filled: recipe title, recipe description, recipe_prep_time")

        const recipe_id = uuid.v4()
        const recipe_title = req.body.recipe_title
        const recipe_description = req.body.recipe_description
        const recipe_prep_time = req.body.recipe_prep_time
        const recipe_coock_time = req.body.recipe_coock_time
        const recipe_serving = req.body.recipe_serving
        const recipe_tools = req.body.recipe_tools
        const recipe_author = req.body.recipe_author
        const recipe_date = req.body.recipe_date
        const recipe_cat_id = req.body.cat_Id
        const recipe_tag_id = req.body.tag_Id
        const recipe_ratting_one = 0
        const recipe_ratting_two = 0
        const recipe_ratting_three = 0
        const recipe_ratting_four = 0
        const recipe_ratting_five = 0

        // List data 
        const recipe_ingridients = req.body.recipe_ingridients
        const recipeStepsData = req.body.recipeStepsData

        const newRecipe = new recipeDataModel({     //SAVE RECIPE  HERE
            recipe_id,
            recipe_title,
            recipe_description,
            recipe_prep_time,
            recipe_coock_time,
            recipe_serving,
            recipe_ingridients,
            recipe_tools,
            recipe_author,
            recipe_date,
            recipe_cat_id,
            recipe_tag_id,
            recipe_ratting_one,
            recipe_ratting_two,
            recipe_ratting_three,
            recipe_ratting_four,
            recipe_ratting_five
        })

        newRecipe.save()
            .then(() => {     //SAVE RECIPE STEPS HERE

                recipeStepsData.map((data) => {

                    const recipe_step_id = uuid.v4()
                    const recipe_ref_id = recipe_id
                    const recipe_step_no = data.recipe_step_no
                    const recipe_step_description = data.recipe_step_description

                    const newRecipeSteps = new recipeStepsDataModel({
                        recipe_step_id,
                        recipe_ref_id,
                        recipe_step_no,
                        recipe_step_description
                    })

                    newRecipeSteps.save()
                        .catch((error) => next(error))

                })


            })
            .then(() => res.json({

                message: "successfully saved recipe",
                recipe: {
                    "recipe_title": recipe_title,
                    "recipe_description": recipe_description,
                    "recipe_prep_time": recipe_prep_time,
                    "recipe_coock_time": recipe_coock_time,
                    "recipe_ingridients": recipe_ingridients,
                    "recipe_tools": recipe_tools,
                    "recipe_author": recipe_author,
                    "recipe_date": recipe_date,
                }
            }))
            .catch((error) => res.status(400).json('Error: ' + error + "Sorry unable to save recipe right now"))

    } catch (error) {

        res.status(400).json('Error: ' + error + "Sorry unable to save recipe right now")

    }

}

const updateRecipe = async (req, res, next) => {

    let recipeId = req.params.recipeId
    console.log(recipeId);

    await recipeDataModel.findById(recipeId)
        .then(updateRecipeRes => {

            updateRecipeRes.recipe_title = req.body.recipe_title
            updateRecipeRes.recipe_description = req.body.recipe_description
            updateRecipeRes.recipe_prep_time = req.body.recipe_prep_time
            updateRecipeRes.recipe_coock_time = req.body.recipe_coock_time
            updateRecipeRes.recipe_ingridients = req.body.recipe_ingridients
            updateRecipeRes.recipe_tools = req.body.recipe_tools
            updateRecipeRes.recipe_author = req.body.recipe_author
            // updateRecipeRes.recipe_cat_id = req.body.recipe_cat_id
            // updateRecipeRes.recipe_tag_id = req.body.recipe_tag_id


            recipeStepsDataModel.find({ recipe_ref_id: updateRecipeRes.recipe_id }, function (err, recipeStepsRes) {
                try {

                    console.log(recipeStepsRes)

                    test = recipeStepsRes.map((recieStepsData, index) => {

                        recieStepsData.recipe_step_no = req.body.recipeStepsData[index].recipe_step_no
                        recieStepsData.recipe_step_description = req.body.recipeStepsData[index].recipe_step_description
                        recieStepsData.save()

                    })
                } catch (error) {

                    next(err)

                }
            })

            updateRecipeRes.save()
                .then(() => res.json({

                    message: "successfully updated recipe",
                    recipe: {
                        "recipe_title": updateRecipeRes.recipe_title,
                        "recipe_description": updateRecipeRes.recipe_description,
                        "recipe_prep_time": updateRecipeRes.recipe_prep_time,
                        "recipe_coock_time": updateRecipeRes.recipe_coock_time,
                        "recipe_ingridients": updateRecipeRes.recipe_ingridients,
                        "recipe_tools": updateRecipeRes.recipe_tools,
                        "recipe_author": updateRecipeRes.recipe_author,
                        "recipe_date": updateRecipeRes.recipe_date,
                    }

                }))
                .catch(error => res.status(400).json('Error: ' + error + " - Sorry unable to save recipe right now"))
        })

}

const deleteRecipe = async (req, res) => {
    try {

        let recipeId = req.params.recipeId

        recipeDataModel.findOne({ recipe_id: recipeId }, function (err, deleteData) {

            const isValidId = mongoose.Types.ObjectId.isValid(deleteData);

            if (!isValidId) {
                return res.status(404).json({ message: " invalid id" })
            }

            recipeDataModel.findByIdAndDelete(deleteData._id)
                .then((deleteDataRes) =>{

                    const isValidId = mongoose.Types.ObjectId.isValid(deleteDataRes);
        
                    if (!isValidId) {
                        return res.status(404).json({ message: " invalid id" })
                    }
                    
                    recipeStepsDataModel.findOne({ recipe_ref_id: recipeId }, function (err, deleteStepsData) {

                        recipeStepsDataModel.findByIdAndDelete(deleteStepsData._id)

                    })

                }
                )
                .then(() => res.json({ message: "recipe deleted successfully" }))






        })


    } catch (error) {
        res.status(400).json(+ error + " - Sorry unable to delete recipe")
    }

}

const saveRecipeCat = async (req, res) => {
    try {
        console.log(req.body)

        const recipe_cat_id = uuid.v4()
        const recipe_cat_title = req.body.cat_title

        const newCat = new recipeCatDataModel({
            recipe_cat_id,
            recipe_cat_title
        })

        newCat.save()
            .then(() =>
                res.json({

                    message: "successfully saved category",
                    tags: {
                        "recipe_cat_title": recipe_cat_title
                    }

                }))


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to save ")
    }
}

const saveRecipeSubCat = async (req, res) => {
    try {

        const recipe_sub_cat_id = uuid.v4()
        const recipe_cat_id = req.body.catId
        const recipe_cat_title = req.body.cat_title

        const newSubCat = new recipeSubCatDataModel({
            recipe_sub_cat_id,
            recipe_cat_id,
            recipe_cat_title
        })

        newSubCat.save()
            .then(() =>
                res.json({

                    message: "successfully saved Sub category",
                    tags: {
                        "recipe_sub_cat_title": recipe_cat_title
                    }

                }))


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to save ")
    }
}

const saveRecipeTag = (req, res) => {
    try {
        console.log(req.body)

        const recipe_tag_id = uuid.v4()
        const recipe_tag_title = req.body.tag_title

        const newTag = new recipeTagDataModel({
            recipe_tag_id,
            recipe_tag_title
        })

        newTag.save()
            .then(() =>
                res.json({

                    message: "successfully saved tag",
                    tags: {
                        "recipe_title": recipe_tag_title
                    }

                }))


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to tag ")
    }
}

const saveIngridient = (req, res) => {
    try {
        console.log(req.body)

        const recipe_ingridient_id = uuid.v4()
        const recipe_ingridient_title = req.body.recipe_ingridient_title
        const recipe_ingridient_descprition = req.body.recipe_ingridient_descprition
        const recipe_ingridient_cost = req.body.recipe_ingridient_cost
        const recipe_ingridient_store = req.body.recipe_ingridient_store

        const newIngridient = new recipeIngridientsDataModel({
            recipe_ingridient_id,
            recipe_ingridient_title,
            recipe_ingridient_descprition,
            recipe_ingridient_cost,
            recipe_ingridient_store
        })

        newIngridient.save()
            .then(() =>
                res.json({

                    message: "successfully saved ingridient",
                    tags: {
                        "recipe_title": recipe_tag_title
                    }

                }))


    } catch (error) {

        res.status(400).json(error + ": Sorry unable to tag ")
    }
}

const deleteIngridient= (req, res) => {

    let ingrdId = req.params.ingrdId

    recipeIngridientsDataModel.findByIdAndDelete(ingrdId)
    .then((ingridientRes => res.json({ message: "success ingridient deleted", ingridient: ingridient })))
    .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete ingridient"))

}

const deleteRecipeCat = (req, res) => {

    let recipeCatId = req.params.catId

    recipeDataModel.findByIdAndDelete(recipeCatId)
    .then((categoryRes => res.json({ message: "success category deleted", category: categoryRes })))
    .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}

const deleteRecipeSubCat = (req, res) => {

    let recipeSubCatId = req.params.subCatId

    recipeSubCatDataModel.findByIdAndDelete(recipeSubCatId)
    .then((subCategory_Res => res.json({ message: "success category deleted", subCategory: subCategory_Res })))
    .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}
const deleteRecipeTag = (req, res) => {

    let recipeTagId = req.params.tagId

    recipeDataModel.findByIdAndDelete(recipeTagId)
    .then((tagRes => res.json({ message: "success tag deleted", tag: tagRes })))
    .catch(err => res.status(400).json('Error: ' + err + "Sorry unable to delete tag"))

}

module.exports = {
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
}