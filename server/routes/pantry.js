const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');
router.post('/add-item', pantryController.createPantryItem);

 
router.get('/get-item/:pantryId/:basketKey', pantryController.getPantryItem);

 
router.get('/list-baskets/:pantryId', pantryController.listBaskets);

 
router.put('/update-item/:pantryId/:basketKey', pantryController.updatePantryItem);

 
router.delete('/delete-item/:pantryId/:basketKey', pantryController.deletePantryItem);

module.exports = router;
