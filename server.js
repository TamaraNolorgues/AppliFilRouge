// https://bezkoder.com/node-js-rest-api-express-mysql/
// Setup Express web server


const express = require("express");
var cors = require("cors")
const bodyParser = require("body-parser");

const app = express();
app.use(cors())


// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Store..." });
});

require("./routes/product.routes.js")(app);

//require("../routes/product.routes.js")
// set port, listen for requests

app.listen(3030, () => {
  console.log("Server is running on port 3030.");
});










