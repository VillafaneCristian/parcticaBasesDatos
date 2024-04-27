const express = require ('express');
const mainRoutes = require ('./routes/mainRoutes.js');
const path = require ('path'); 
const app = express();

// ************************* Template Engine - don't touch ************************ //
const viewsPath = path.join(__dirname,'/views');
app.set('view engine', 'ejs');
app.set('views', viewsPath);  

// ************************* Middlewares - don't touch *************************** //
const publicPath = path.join(__dirname,'../public');
app.use(express.static(publicPath)); 


app.use('/',mainRoutes); 

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
});