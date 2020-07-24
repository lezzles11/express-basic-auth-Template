const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const basicAuth = require("express-basic-auth");

// Alright - let's give this a shot!

// username: username
// password: pleasework

app.use(
  basicAuth({
    challenge: true,
    users: {
      username: "pleasework",
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure for HBS
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs");

// All static files are found in the public folder (such as css)
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(3000, () => console.log("Running on 3000"));
