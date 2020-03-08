
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { 'Content-Type': 'application/json' } : {}

  })
      .then(response => {
          return response.json();

      })
};

const getProduct = () => {
  sendHttpRequest('Get', 'http://localhost:3030/products').then((data) => {
      let result = `
      <h2 class="text-center">Product List</h2>
      <div class="container">
  <div class="row ">
      <table class="table table-striped table-sm">
              <thead class="thead bg-dark text-white">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead> <tbody>`;

      data.forEach((product) => {
          const { Id, Names, Brand, Price, Quantity} = product
          result +=
              
                  `<tr>
                  <th>${Id}</th>
                  <th>${Names}</th>
                  <th>${Brand}</th>
                  <th> ${Price}</th>
                  <th> ${Quantity}</th>
                  <th> <a href="#" class="btn btn-success">+</a></th>
                  
                  </tr>`
              
          document.getElementById('result').innerHTML = result;
      });
      document.getElementById('result').innerHTML += `</tbody> </table> </div> </div>
      <a href="#" class="btn btn-danger">Cart</a>
      <a href="#" class="btn btn-danger">Buy</a>`;
  })
}

getProduct();