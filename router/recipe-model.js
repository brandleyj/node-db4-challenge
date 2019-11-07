const db = require("../data/db-config");

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};

function getRecipes() {
	return db("recipes");
}

function getShoppingList(id) {
	return db("recipes")
		.innerJoin(
			"recipe_ingredients",
			"recipes.id",
			"recipe_ingredients.recipe_id"
		)
		.innerJoin(
			"ingredients",
			"recipe_ingredients.ingredient_id",
			"ingredients.id"
		)
		.where({ recipe_id: id })
		.select("recipe_ingredients.quantity", "ingredients.ingredient_name");
}

function getInstructions(id) {
	return db("recipes")
		.innerJoin("steps", "recipes.id", "steps.recipe_id")
		.where({ recipe_id: id })
		.select("steps.step_number", "steps.instruction");
}
