const express = require ('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.index);

router.get('/create',usersController.create);
router.post('/create',usersController.store);

router.get('/edit/:id',usersController.edit);
router.put('/edit/:id',usersController.update);

router.delete('/delete/:id',usersController.destroy);


module.exports = router;