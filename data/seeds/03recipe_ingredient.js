exports.seed = function(knex) {
	return knex("recipe_ingredient")
		.del()
		.then(function() {
			return knex("recipe_ingredient").insert([
				{ quantity: 1, recipe_id: 3, ingredient_id: 1 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 2 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 3 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 4 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 5 },
				{ quantity: 1, recipe_id: 3, ingredient_id: 6 },
				{ quantity: 1, recipe_id: 1, ingredient_id: 7 },
				{ quantity: 1, recipe_id: 1, ingredient_id: 8 },
				{ quantity: 1, recipe_id: 1, ingredient_id: 9 }
			]);
		});
};
