
var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");
console.log(path.join(__dirname, './apps/public'))


var app = express();
var PORT = process.env.PORT || 8080;

app.use('/public', express.static(path.join(__dirname, 'apps/public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./apps/routing/apiRoutes")(app);
require("./apps/routing/htmlRoutes")(app);
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});