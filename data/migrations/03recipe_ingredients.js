exports.up = function(knex) {
	return knex.schema.createTable("recipe_ingredients", tbl => {
		tbl.increments();

		tbl
			.float("quantity")
			.unsigned()
			.notNullable();
		tbl
			.integer("recipe_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("recipes");
		tbl
			.integer("ingredient_id")
			.unsigned()
			.notNullable()
			.references("id")
			.inTable("ingredients");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("recipe_ingredients");
};
