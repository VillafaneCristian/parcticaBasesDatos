const express = require ('express');
const router = express.Router();

const dependenciesController = require ('../controllers/dependenciesController.js'); 

router.get('/', dependenciesController.index); 

router.get('/create', dependenciesController.create); 



module.exports = router; 