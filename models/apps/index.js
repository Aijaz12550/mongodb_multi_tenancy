const { Schema, model} = require("mongoose");

const appSchema = new Schema({
    name: String
})

module.exports = model("Apps",appSchema)