const db = require ('../database/models/index.js');

module.exports = {

    getAllUsers: function(){
        return db.users.findAll();
    },

    getUser: function(id){
        return db.users.findById(id);
    },

    createUser: function (userData){
        db.users.store(userData); 
    },

    updateUser: function(id,userData){
        db.users.update(id,userData);
    },

    deleteUser: function(id){
        db.users.delete(id);
    }


}