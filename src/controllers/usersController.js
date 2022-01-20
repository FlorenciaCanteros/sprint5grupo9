const {validationResult} = require('express-validator');

const usersController={
    login:( req,res)=>{
        return res.render('users/login');
    },
    processLogin:(req,res)=>{
        return res.render('users/login');
    },
    register:(req,res)=>{
        return res.render('users/register');
    },
    processRegister:(req,res)=>{
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

        return res.send('Ok, las validaciones esta bien y no tienes errores');
    },
    recover:(req,res)=>{
        return res.render('users/recuperar');
    },
    perfil:(req,res)=>{
        return res.render('users/perfil');
    }
}

module.exports=usersController;