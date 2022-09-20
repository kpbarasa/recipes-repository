function recipeFormat(recipe_id, recipe_title, recipe_description, recipe_author, recipe_cat_id, recipe_tag_id, recipe_cuisine_id, recipe_diet_id, recipe_ratting) {
  return {
    recipe_id,
    recipe_title,
    recipe_description,
    recipe_author,
    recipe_cat_id, 
    recipe_tag_id, 
    recipe_cuisine_id, 
    recipe_diet_id,
    recipe_ratting
  };
}

module.exports = recipeFormat;