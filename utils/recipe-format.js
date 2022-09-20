function recipeFormat(recipe_title, recipe_description, recipe_author, recipe_ratting) {
  return {
    recipe_title,
    recipe_description,
    recipe_author,
    recipe_ratting
  };
}

module.exports = recipeFormat;