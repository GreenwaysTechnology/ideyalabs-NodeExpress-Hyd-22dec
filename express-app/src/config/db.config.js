const { Sequelize } = require('sequelize');

const { MYSQL_DB, MYSQL_ROOT_USER, MYSQL_ROOT_PASSWORD, HOST } = process.env


const sequelize = new Sequelize(MYSQL_DB, MYSQL_ROOT_USER, MYSQL_ROOT_PASSWORD, {
    host: HOST,
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
//create tables :force:true means , recreate table every time when app restarts
sequelize.sync({ force: false }).then(() => {
    console.log('Tables created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = sequelize