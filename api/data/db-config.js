const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.DEV || "development"

module.exports = knex(config[env])