require('dotenv').config();
const { Sequelize } = require('sequelize');
const FavoriteModel= require('./models/Favorite.js')
const UserModel= require('.//models/User.js');

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize("postgres://:aleXander1@localhost:5432/rym",
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
FavoriteModel(sequelize)
UserModel(sequelize)
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo   !
const { User, Favorite } = sequelize.models;

Favorite.belongsToMany(User, { through: 'user_favorite' })
User.belongsToMany(Favorite, { through: 'user_favorite' })

module.exports = {
    User,
    Favorite,
   conn: sequelize,
};
