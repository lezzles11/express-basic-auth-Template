const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send("hello!");
});
app.listen(3000, () => console.log("Running on 3000"));
