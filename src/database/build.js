//Rebuilds database every for test running
const fs = require('fs');
const path = require('path');
const db = require('./connection');

const initPath = path.join(__dirname, 'initTest.sql');
const initSQL = fs.readFileSync(initPath, 'utf-8');

const build = () => db.query(initSQL);

if (require.main === module) {
  build.apply().then(() => db.end());
}

module.exports = build;
