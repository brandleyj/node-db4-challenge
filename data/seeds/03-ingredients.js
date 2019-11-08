exports.seed = function(knex) {
	return knex("ingredients")
		.del()
		.then(function() {
			return knex("ingredients").insert([
				{ ingredient_name: "tomato" },
				{ ingredient_name: "mozzarella cheese" },
				{ ingredient_name: "basil" },
				{ ingredient_name: "salt" },
				{ ingredient_name: "pepper" },
				{ ingredient_name: "balsamic glaze" },
				{ ingredient_name: "cheese" },
				{ ingredient_name: "bread" },
				{ ingredient_name: "butter" }
			]);
		});
};
