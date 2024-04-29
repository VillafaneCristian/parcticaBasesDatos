const express = require ('express');
const mainRoutes = require ('./routes/mainRoutes.js');
const path = require ('path'); 
const methodOverride = require ('method-override');
const app = express();

// ************************* Template Engine - don't touch ************************ //
const viewsPath = path.join(__dirname,'/views');
app.set('view engine', 'ejs');
app.set('views', viewsPath);  

// ************************* Middlewares - Carpeta Public - don't touch *************************** //
//***Se define la carpeta pucblic como carpeta de archivos publicos ***************//
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath)); 

//****************Middleware - informacion que viene de los formularios - don't touch ************//
//*** Se configura la aplicacion para que capture la informacion de los formularios sin problemas **//
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//**************Middleware - method_override - don't touch ****************************/
//**** se configura para que se pueda sobreeescribir el metodo post en los formularios***********/
app.use(methodOverride('_method'));


app.use('/',mainRoutes); 

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
});