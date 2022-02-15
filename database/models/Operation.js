
module.exports = function (sequelize, DataTypes) {
    let alias = 'Operation';

    let cols = {
     idOperation: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     detail: {
         type: DataTypes.STRING
     },
     ammount: {
         type: DataTypes.FLOAT
     },
    date: {
        type: DataTypes.DATE
    },
    type: {
         type: DataTypes.STRING
     },
    category: {
         type: DataTypes.STRING
     },
    id_user: {
         type: DataTypes.INTEGER
     }
    }
    let config = {
        tableName: 'operations',
        timestamps: false
    }
    let Operation = sequelize.define(alias, cols, config);
    
    return Operation;
}