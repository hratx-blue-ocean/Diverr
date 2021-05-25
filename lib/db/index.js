import { Pool } from 'pg';
require('dotenv').config();

const pool = new Pool({
  user: 'sunil',
  host: '107.21.163.122',
  database: 'diverr',
  password: 'postgres',
  port: 5432
});

// const pool = new Pool({
//   user: process.env.DB_USERNAME,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT
// });


// we want this query to work dynamically with passed-in authentication info
// start1: query to GET user information for front end
// start2: query to POST user to db

// On User Login

// GET user id, name, tags
// SELECT id, first_name, last_name from users WHERE email=<email@email.com>
// front-end stores these values in state or session or whatever
// SELECT id_tags from logs_tags WHERE id_user=<user.id from state>
// Store tags in state too
// Make sure to include user id in log info object
// GET user logs/photos/tags
// SELECT * from logs WHERE id_user=<user.id from state> (actually we're going to aggregate this request with PHOTOS and TAGS)

const executeQuery = (callback) => {
  ; (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        SELECT * FROM hello
      `);
      callback(res.rows);
    } finally {
      client.release();
    }
  })().catch(err => console.error(err.stack));
}

export default executeQuery;