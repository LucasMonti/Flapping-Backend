import {DataTypes} from "sequelize";
import db from '../db/connection';

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{

    modelName: 'user',
    underscored: true,
    tableName: 'users',
    paranoid: true,
}
)

export default User;
