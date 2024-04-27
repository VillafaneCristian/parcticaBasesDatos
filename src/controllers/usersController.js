module.exports = {

    index: function(req,res){
        res.send('VISTA PRINCIPAL DE USUARIOS');
    },
    create: function(req,res){
        res.render('users/user-create-form.ejs');
    }

}