const dependenciesServices = require ('../services/dependenciesServices.js');

module.exports = {

    index: function(req,res){
        dependenciesServices.getAllDependencies()
            .then((allDependencies)=>{
                res.render('dependencies/dependencies-list.ejs',{allDependencies:allDependencies});
            })
            .catch(function(error){
                console.log(error);
            });     
    },
    
    create: function(req,res){
        res.render('dependencies/dependencie-create-form'); 
    },

    edit: function(req,res){

        dependenciesServices.getDependencie(req.params.id)
            .then(function(dependencieToEdit){
                res.render('dependencies/dependencie-edit-form',{dependencieToEdit:dependencieToEdit});
            })
            .catch(function(error){
                console.log(error);
            });  
    },

    store: function (req,res){
        dependenciesServices.createDependencie(req.body);
        res.redirect('/dependencies');
    },

    update: function(req,res){
        console.log(req.params.id,req.body)
        dependenciesServices.updateDependencie(req.params.id,req.body);
        res.redirect('/dependencies');  
    },

    delete: function (req,res){
        dependenciesServices.deleteDependencie(req.params.id);
        res.redirect('/dependencies');
    }

}