const express = require("express");
const router = express.Router();

const db = require("./recipe-model");

router.get("/", (req, res) => {
	db.getRecipes()
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: "Error retrieving recipes" });
		});
});

router.get("/:id/shoppingList", (req, res) => {
	const { id } = req.params;

	db.getShoppingList(id)
		.then(list => {
			if (list.length) {
				res.status(200).json(list);
			} else {
				res
					.status(404)
					.json({ message: `Recipe with id ${id} does not exist` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Error retrieving shopping list" });
		});
});

router.get("/:id/instructions", (req, res) => {
	const { id } = req.params;

	db.getInstructions(id)
		.then(instructions => {
			if (instructions.length) {
				res.status(200).json(instructions);
			} else {
				res
					.status(404)
					.json({ message: `Recipe with id ${id} does not exist` });
			}
		})
		.catch(err => {
			res.status(500).json({ message: "Error retrieving recipe instructions" });
		});
});

module.exports = router;
