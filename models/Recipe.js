// Require mongoose
//foo
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
const RecipeSchema = new Schema({
  description: {
    type: String,
    required: false
  },
  videos  : {
            type: String,
            required: false
      },
  ingredients : {
            type: [String],
            required: false
      },
  id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  descriptionPlain: {
    type: String,
    required: false
  }//,
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

// Create the Article model with the ArticleSchema
const Recipe = mongoose.model("Recipe", RecipeSchema);

// Export the model
module.exports = Recipe;
