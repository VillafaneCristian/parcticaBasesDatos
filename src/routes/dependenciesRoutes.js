const express = require ('express');
const router = express.Router();

const dependenciesController = require ('../controllers/dependenciesController.js'); 

router.get('/', dependenciesController.index); 

router.get('/create', dependenciesController.create); 
router.post('/create',dependenciesController.store);

router.get('/edit/:id', dependenciesController.edit);
router.put('/edit/:id', dependenciesController.update); 

router.delete('/delete/:id', dependenciesController.delete);



module.exports = router; 