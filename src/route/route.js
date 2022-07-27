const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const middleware = require('../middleware/middleware')

// User APIs 
router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/user/:userId/profile', middleware.authentication, userController.getUserById)
router.put('/user/:userId/profile', middleware.authentication, middleware.authorization, userController.updateUser)

// Product APIs
// router.post('/products', productController. )
// router.get('/products', productController. )
// router.get('/products/:productId', productController. )
// router.put('/products/:productId', productController.)
// router.delete('/products/:productId', productController.)


module.exports = router;