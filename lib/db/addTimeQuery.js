import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeAddTimeQuery = (email, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        SELECT SUM(logs.abt)
        FROM logs, users
        WHERE logs.id_user = users.id AND users.email = '${email}';
      `);
      callback(null, res.rows[0].sum);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeAddTimeQuery;
