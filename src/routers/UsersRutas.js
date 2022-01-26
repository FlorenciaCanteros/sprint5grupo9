const express= require ('express');
const router= express.Router();


const path = require('path');


//midelewares
const uploadFile = require('../middlewares/multerMiddleware');
const {validaciones} =require('../middlewares/validatorMiddleware')

//controllers
let usersController= require('../controllers/usersController');


//rutas:
//formulario de Login
router.get('/login', usersController.login);
//procesar el login
router.post('/login', usersController.processLogin);


//formulario de registro
router.get('/register', usersController.register);
//procesa el registro
router.post('/register', uploadFile.single('avatar'), validaciones, usersController.processRegister);


//formulario de recuperar
router.get('/recuperar', usersController.recover);
//formulario de perfil
router.get('/perfil/:userId', usersController.perfil);

module.exports= router;