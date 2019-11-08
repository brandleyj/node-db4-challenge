exports.seed = function(knex) {
	return knex("recipe_ingredients")
		.del()
		.then(function() {
			return knex("recipe_ingredients").insert([
				{ quantity: 1, recipe_id: 1, ingredient_id: 7 },
				{ quantity: 1, recipe_id: 1, ingredient_id: 8 },
				{ quantity: 1, recipe_id: 1, ingredient_id: 9 },
				{ quantity: 1, recipe_id: 2, ingredient_id: 10 },
				{ quantity: 1, recipe_id: 2, ingredient_id: 11 },
				{ quantity: 1, recipe_id: 2, ingredient_id: 12 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 1 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 2 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 3 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 4 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 5 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 6 }
			]);
		});
};
