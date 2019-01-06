module.exports = (app) => {
    const products = require('./product.controller.js');

    // Create a new Product
    app.post('/products', products.create);

    // Retrieve all Products
    app.get('/products', products.findAll);

    // Retrieve a single Product with productId
    app.get('/products/:productId', products.findOne);

    // Update a Note with productId
    app.put('/products/:productId', products.update);

    // Delete a Note with productId
    app.delete('/products/:productId', products.delete);
}