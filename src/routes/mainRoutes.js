const express = require ('express');
const router = express.Router();

const mainController = require ('../controllers/mainController.js'); 

const usersRoutes = require ('../routes/usersRoutes.js');
const dependenciesRoutes = require ('../routes/dependenciesRoutes.js');


router.get('/', mainController.index); 


router.use('/users', usersRoutes); 
router.use('/dependencies', dependenciesRoutes); 


module.exports = router; 