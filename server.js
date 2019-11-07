const express = require("express");
const helmet = require("helmet");

const recipeRouter = require("./router/recipeRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
	return res.send("<h1>Recipe Book</h1>");
});

module.exports = server;
