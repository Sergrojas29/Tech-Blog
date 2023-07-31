const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt')

class User extends Model { }
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },  
  {
    hooks: {
      beforeBulkCreate: async (user) => {
        try {
          // user.password = await bcrypt.hash(user.password, 10);
          console.log(user.password);
        } catch (err) {
          console.log(err);
        }
      },
      // beforeCreate: async (user) => {
      //   try {
      //     user.password = await bcrypt.hash(user.password, 10);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      // beforeUpdate: async (user) => {
      //   try {
      //     user.password = await bcrypt.hash(user.password, 10);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  },
);

// User.beforeCreate(async (user, options) => {
//   const hashedPassword = bcrypt.hashSync(user.password , 10);
//   user.password = hashedPassword;
// });

// User.beforeUpdate((user) => {
//   const hashedPassword = bcrypt.hashSync(user.password , 10);
//   user.password = hashedPassword;
// });


module.exports = User;
