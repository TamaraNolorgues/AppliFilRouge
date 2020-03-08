/*
Define Routes
When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will reponse. It’s why we’re gonna setup the routes.

These are routes we define:

/customers: GET, POST, DELETE
/customers/:customerId: GET, PUT, DELETE
Create a routes folder inside app folder with content like this:

*/


module.exports = app => {
    const products = require("../controllers/product.controller.js");
  
    // Create a new Customer
    app.post("/products", products.create);
  
    // Retrieve all Customers
    app.get("/products", products.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/products/:productId", products.findOne);
  
    // Update a Customer with customerId
    app.put("/products/:productId", products.update);
  
    // Delete a Customer with customerId
    app.delete("/products/:productId", products.delete);
  
    // Create a new Customer
    app.delete("/products", products.deleteAll);
  };


  /*

  You can see that we use a controller from /controllers/customer.controller.js. It contains methods for handling CRUD operations and will be created in the next step.

  We also need to include routes in server.js (right before app.listen()):

  ...

  require("./app/routes/customer.routes.js")(app);

  app.listen(...);

  */