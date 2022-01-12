const express = require('express');
const app = express();

app.use(express.static('public'));

//Motor de vistas
//set es configuracion, vamos a configurar app, en el q van 2 parametros
app.set('view engine','ejs');//en el 1ro va el motor de plantilla, en el 2do va el nombre ejs

app.set('views','src/views');//por otro lado vamos a crear otro set, para simplificar el nombres de las vistas. utilzamos un segundo seteo/recurso.


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});

const UsersRutas= require('./src/routers/UsersRutas')
const productRutas= require('./src/routers/productRutas')
const methodOverride  = require("method-override");
app.use(methodOverride("_method"));

//Ruta product
app.use('/', productRutas);
app.use(express.urlencoded({extended:false})); 
app.use(express.json());
//Ruta users
app.use('/',UsersRutas);