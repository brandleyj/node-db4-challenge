exports.seed = function(knex) {
	return knex("steps")
		.del()
		.then(function() {
			return knex("steps").insert([
				{
					step_number: 1,
					instruction: "Slice tomato, mozzarella and basil.",
					recipe_id: 3
				},
				{
					step_number: 2,
					instruction: "Layer slice of mozzarella and basil on top of tomato.",
					recipe_id: 3
				},
				{
					step_number: 3,
					instruction: "Add Salt, pepper and drizzle balsamic glass.",
					recipe_id: 3
				},
				{
					step_number: 1,
					instruction: "Butter 1 side of each slice of bread.",
					recipe_id: 1
				},
				{
					step_number: 2,
					instruction:
						"Put cheese between slices of bread with butter on the outside.",
					recipe_id: 1
				},
				{
					step_number: 3,
					instruction:
						"Cook on medium heat until bread is browned and cheese is melted.",
					recipe_id: 3
				}
			]);
		});
};
