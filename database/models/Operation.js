
module.exports = function (sequelize, DataTypes) {
    let alias = 'Operation';

    let cols = {
     idOperations: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoincrement: true
    },
     detail: {
         type: DataTypes.STRING
     },
     ammount: {
         type: DataTypes.INTEGER
     },
    date: {
        type: DataTypes.DATE
    },
    type: {
         type: DataTypes.STRING
     },
    category: {
         type: DataTypes.STRING
     }
    }
    let config = {
        tableName: 'Operations',
        timestamps: false
    }
    let Operation = sequelize.define(alias, cols, config);
    
    return Operation;
}