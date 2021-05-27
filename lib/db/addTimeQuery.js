import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeAddTimeQuery = (email, minutes, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      const res = await client.query(`
        UPDATE users
        SET cumulative_time = cumulative_time + ${minutes}
        WHERE email = '${email}';
      `);
      callback(null, 'user cumulative time updated');
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeAddTimeQuery;