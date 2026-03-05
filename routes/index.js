const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Route to get all users
router.get('/products', userController.getAllProducts);

//Routes to create
router.post("/products", userController.createNewProduct);

module.exports = router;