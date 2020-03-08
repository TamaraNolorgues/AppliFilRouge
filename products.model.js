/*
In models folder, create a file called customer.model.js. We’re gonna define constructor for Customer object here, and use the database connection above to write CRUD functions:

create a new Customer
find a Customer by id
get all Customers
update a Customer by id
remove a Customer
remove all Customers
This is the content inside customer.model.js:
*/



const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.name = product.name;
  this.brand = product.brand;
  this.price = product.price;
  //this.quantity = product.quantity;
};



Product.create = (newProduct, result) => {
  console.log("***++++++++++++++++++" + newProduct)
  sql.query("INSERT INTO T_Products SET names = ?, brand = ?", [newProduct.name, newProduct.brand], (err, res)=> {
         console.log("created product: ", { id: res.insertId, ...newProduct });
         result(null, { id: res.insertId, ...newProduct });
  })
  if(err) {
      console.log("error: ", err);
      result(err, null);
   }
}


Product.findById = (productId, result) => {
  sql.query(`SELECT * FROM T_Products WHERE id = ${productId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found product: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};


Product.getAll = result => {
  sql.query("SELECT * FROM T_Products", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("products: ", res);
    result(null, res);
  });
};

Product.updateById = (id, product, result) => {
  sql.query(
    "UPDATE T_Products SET name = ?, brand = ?, price = ?, quantity = ? WHERE id = ?",
    [product.name, product.brand, product.price, product.quantity, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...customer });
    }
  );
};

Product.remove = (id, result) => {
  sql.query("DELETE FROM T_Products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted product with id: ", id);
    result(null, res);
  });
};

Product.removeAll = result => {
  sql.query("DELETE FROM T_Product", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} product`);
    result(null, res);
  });
};

module.exports = Product;