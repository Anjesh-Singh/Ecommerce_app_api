const ProductController = require('../controllers/product.controller');

const routes = (app) => {
    app.get('/ecom/api/v1/products', ProductController.getproducts);
    app.post('/ecom/api/v1/products', ProductController.createProduct);
}

module.exports = routes;