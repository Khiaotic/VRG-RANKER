const Sequelize = require("sequelize");

let sequelize;

sequelize = new Sequelize("games_db", "root", "Tusc0n11!!22@@", {
	host: "localhost",
	dialect: "mysql",
	port: 3306,
});

module.exports = sequelize;
