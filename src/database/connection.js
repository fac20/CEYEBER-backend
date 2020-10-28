const pg = require('pg');
const env = require('dotenv');

env.config();

if (process.env.NODE_ENV == 'test') {
  connectionString = process.env.TEST_DATABASE_URL;
}

const options = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
};

const database = new pg.Pool(options);

module.exports = database;
