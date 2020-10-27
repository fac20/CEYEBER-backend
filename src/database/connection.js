const pg = require('pg');
const env = require('dotenv');

env.config();

const options = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
};

const database = new pg.Pool(options);

module.exports = database;
