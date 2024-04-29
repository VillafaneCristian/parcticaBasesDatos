const usersServices = require ('../services/usersServices.js');

module.exports = {

    index: function(req,res){
        const allUsers = usersServices.getAllUsers();
        res.render('users/users-list.ejs',{allUsers:allUsers});
    },
    create: function(req,res){
        res.render('users/users-create-form.ejs');
    },
    store:function(req,res){
        usersServices.createUser(req.body);
        res.redirect('/users');
    },

    edit: function(req,res){
        const userToEdit = usersServices.getUser(req.params.id);
        res.render('users/users-edit-form.ejs', {userToEdit:userToEdit});
    },

    update: function(req,res){
        usersServices.updateUser(req.params.id,req.body); 
        res.redirect('/users');
    },

    destroy: function(req,res){
        usersServices.deleteUser(req.params.id);
        res.redirect('/users'); 
    }

}