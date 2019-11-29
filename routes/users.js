const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const auth = require('../middleware/auth');


router.post('/create-user', userCtrl.createUser);


router.post('/signin', userCtrl.signin);
router.delete('/:id', userCtrl.deleteUser);
router.get('/', userCtrl.getUsers);
router.get('/:id', auth, userCtrl.getUserById);


module.exports = router;