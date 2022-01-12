const express= require ('express');
const router= express.Router();


let usersController= require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.get('/recuperar', usersController.recover);
router.get('/perfil', usersController.perfil);

module.exports= router;