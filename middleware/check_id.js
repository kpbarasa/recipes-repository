const mongoose = require("mongoose")

module.exports = (req, res, next) => {
    try {

        let id = req.params.id

        if (mongoose.Types.ObjectId.isValid(id)) {
            next()
        }
        else {
            return res.status(400).json({ message: " invalid id Error: Cast to ObjectId failed for value " })
        }

    } catch (error) {

        res.sendStatus(404).json('Erro message: ' + error)

    }
};  