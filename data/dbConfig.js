const knex = require('knex');
const config = require('../knexfile.js');

//write this way for testing
const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);