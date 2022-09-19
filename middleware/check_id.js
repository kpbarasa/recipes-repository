const mongoose = require("mongoose")

module.exports = (req, res, next) => {
    try {

        let recipeId = req.params.recipeId

        if (mongoose.Types.ObjectId.isValid(recipeId)) {
            next()
        }
        else {
            return res.status(404).json({ message: " invalid id Error: Cast to ObjectId failed for value " })
        }

    } catch (error) {

        res.sendStatus(404).json('Erro message: ' + error)

    }
};  