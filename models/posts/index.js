const { Schema, model} = require("mongoose");

const postSchema = new Schema({
    name: String
})

module.exports = model("Post",postSchema)