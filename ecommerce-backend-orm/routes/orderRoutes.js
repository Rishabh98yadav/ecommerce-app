const express = require('express');
const router = express.Router();


const { protect } = require('../middlewares/authMiddleware'); // path must be correct
const { placeOrder, getOrderHistory } = require('../controllers/orderController');

router.post('/', protect, placeOrder);
router.get('/', protect, getOrderHistory);

module.exports = router;
