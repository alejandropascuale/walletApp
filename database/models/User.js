
module.exports = function (sequelize, DataTypes) {
    let alias = 'User';

    let cols = {
     idUser: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     email: {
         type: DataTypes.STRING
     },
     password: {
         type: DataTypes.STRING
     },
    avatar: {
        type: DataTypes.STRING
    }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    let User = sequelize.define(alias, cols, config);
    
    return User;
}