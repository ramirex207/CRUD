const express = require('express');
const router = express.Router();
const saleController = require('../controllers/salesController');
router.post('/', saleController.createSale);
router.get('/', saleController.getSales);
router.get('/:id', saleController.getSale); 
router.put('/:id', saleController.updateSale);
router.delete('/:id', saleController.deleteSale);
module.exports = router;
