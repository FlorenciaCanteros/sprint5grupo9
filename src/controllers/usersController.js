const usersController={
    login:( req,res)=>{
        res.render('users/login')
    },
    register:(req,res)=>{
        res.render('users/register')
    },
    recover:(req,res)=>{
        res.render('users/recuperar')
    },
    perfil:(req,res)=>{
        res.render('users/perfil')
    }
}

module.exports=usersController;