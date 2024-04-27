module.exports = {

    index: function(req,res){
        res.send('PAGINA PRINCIPAL DE LAS DEPENDENCIAS'); 
    },
    
    create: function(req,res){

        res.render('dependencies/dependencie-create-form'); 
    }

}