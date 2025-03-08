const pg = require("pg");
const { Pool } = pg;

const config = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
};

const pool = new Pool(config);

const query = (queryText, params) => {
  return pool.query(queryText, params);
};

module.exports = {
  query,
};
