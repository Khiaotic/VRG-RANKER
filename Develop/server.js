const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const serveStatic = require("serve-static");
const session = require("express-session");

// Bring in the sign up routes
const signUpRoutes = require("./controllers/authentication/signUpRoutes");
app.use("/signup", signUpRoutes);

// Importing my models
const Games = require("./models/games");
const UserVotes = require("./models/user_votes");
const Users = require("./models/users");

//set handlebars as the view engine + set default layout to main.hbs (actually main.handlebars), like a boss
app.set("views", "./views");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Configure express-session
app.use(
	session({
		secret: "my-secret", // secret key to sign the session ID cookie
		resave: false, // don't save session if unmodified
		saveUninitialized: false, // don't create session until something is stored
	})
);

// Import our routes
const Routes = require("./controllers/index");

// Ensure we use the routes
app.use("/", Routes);

app.use(serveStatic("Develop/views/css"));

sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("App listening on port 3001");
	});
});
