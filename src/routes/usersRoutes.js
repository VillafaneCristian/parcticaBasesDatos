const express = require ('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.index);

router.get('/create',usersController.create);



module.exports = router;