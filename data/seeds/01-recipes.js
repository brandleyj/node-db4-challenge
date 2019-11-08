exports.seed = function(knex) {
	return knex("recipes")
		.del()
		.then(function() {
			return knex("recipes").insert([
				{ recipe_name: "grilled cheese" },
				{ recipe_name: "homemade pasta" },
				{ recipe_name: "caprese salad" }
			]);
		});
};
