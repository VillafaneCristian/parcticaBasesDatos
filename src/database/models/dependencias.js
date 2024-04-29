module.exports = (sequelize,DataTypes) => {
    let alias = 'dependencias';
    let cols = {
        nombre:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        piso:{
            type: DataTypes.STRING
        },
        lado:{
            type: DataTypes.STRING
        }
    };
    let config = {
        tableName:'dependencias',
        timestamps: false
    }

    const dependencias = sequelize.define(alias,cols,config);
    return dependencias;
}