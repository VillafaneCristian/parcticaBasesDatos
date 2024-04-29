const db = require ('../database/models/index.js');


module.exports = {

    getAllDependencies: function () {
        return db.dependencias.findAll();
    },

    getDependencie: function (id){
        return db.dependencias.findByPk(id); 
    },

    createDependencie: function (dependencieData){
        console.log(dependencieData);
        db.dependencias.create({
            id: dependencieData.id,
            nombre: dependencieData.nombre,
            email: dependencieData.email,
            piso: dependencieData.piso,
            lado: dependencieData.lado
        });
    },

    updateDependencie: function(id,dependencieData){
        db.dependencias.update({
            id: dependencieData.id,
            nombre: dependencieData.nombre,
            email: dependencieData.email,
            piso: dependencieData.piso,
            lado: dependencieData.lado,
        },
        {
            where:{id:id}
        }) 
    },

    deleteDependencie: function(id){
        db.dependencies.delete(id);
    }

}