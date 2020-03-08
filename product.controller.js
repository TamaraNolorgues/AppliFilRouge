
/*
Create the Controller
Now we create a controllers folder inside app folder, then we have a file named customer.controller.js. Our controller will be written inside this with CRUD functions:

create
findAll
findOne
update
delete
deleteAll
*/



const Product = require("../models/products.model.js");

// Create and Save a new Customer
    exports.create = (req, res) => {
        console.log("****************") 
        // Validate request
        if (!req.body) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
        }

        console.log("--------"+req.body.name);
      
        // Create a Product
        const product = new Product({
          name: req.body.name,
          brand: req.body.brand,
          price: req.body.price,
          //quantity: req.body.quantity
        });
      
        // Save Customer in the database
        Product.create(product, (err, data) => {
          if (err)
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Product."
            });
          else res.send(data);
        });
      };


      
// Retrieve all Customers from the database.
// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};



// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  
};

// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};

