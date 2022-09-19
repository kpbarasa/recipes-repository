const recipeDataModel = require('../models/recipe.model')
const recipeCategoriesDataModel = require('../models/categories.model')
const recipeTagsDataModel = require('../models/tags.model')

const getRecipes = (req, res) => {
    recipeDataModel.find()
        .then(recipeRes => {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw new Error("Sorry there is no recipes available right now")

            recipeRes.json({ message: success, recipes: recipeRes })

        })
        .catch(err => res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now"))
}

const getRecipe = (req, res) => {

    try {

        let recipeId = req.params.recipeId

        recipeDataModel.findOne({ recipe_id: recipeId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw new Error("Sorry there is no recipes available right now")

            else return recipeRes.json({ message: success, recipes: recipeRes })

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now")

    }
}

const getRecipeCat = (req, res) => {

    try {

        let recipeCatId = req.params.catId

        recipeDataModel.findOne({ recipe_cat_id: recipeCatId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw new Error("Sorry there is no recipes available right now")

            else return res.json({ message: "success", recipes: recipeRes })

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now")

    }
}

const getRecipeTag = (req, res) => {

    try {

        let recipeCatId = req.params.tagId
        console.log(recipeCatId)

        recipeDataModel.findOne({ recipe_tag_id: recipeCatId }, function (err, recipeRes) {

            if (recipeRes === null) return res.json({ message: "Sorry there is no recipes available right now" })

            else if (Object.keys(recipeRes).length === 0) throw new Error("Sorry there is no recipes available right now")

            else return res.json({ message: "success", recipes: recipeRes })

        })

    } catch (error) {

        res.status(400).json('Error: ' + err + "Sorry there is no recipes available right now")

    }
}

module.exports = {
    getRecipe,
    getRecipes,
    getRecipeCat,
    getRecipeTag
}