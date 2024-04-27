const path = require ('path'); 
const fs = require ('fs');

const users = {

    fileName: path.join(__dirname,'/usersDataBase.json'),

    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8')); 
    },
    
    saveData: function(userData){
        fs.writeFileSync(this.fileName, JSON.stringify(userData,null,2));    
    },

    findAll: function(){
        return this.getData();
    },

    findById: function(id){
        const allUsers = this.findAll();
        const userFound = allUsers.find((oneUser)=>oneUser.id===id);
        return userFound;
    },

    findByField: function(field,text){
        const allUsers = this.findAll(); 
        const userFound = allUsers.find((oneUser)=> oneUser[field]===text); 
        return userFound;
    }, 

    store: function(userData){
        consl
    }

}

module.exports = users; 

console.log(users.findByField('id',20));

//users.saveData([{'id':10,'nombre':"Diego"},{'id':20,'nombre':"Juan"},{'id':30,'nombre':"Marcos"}]); 