import { Pool } from "pg";
// import { getSession } from "next-auth/client";

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const executeUserQuery = (email, callback) => {
  (async () => {
    const client = await pool.connect();
    try {
      // const res = await client.query(`
      //   SELECT *,
      //   (
      //     SELECT (jsonb_agg(tags.name)) AS tags
      //     FROM tags, logs_tags
      //     WHERE tags.id = logs_tags.id_tag AND users.id = logs_tags.id_user
      //   )
      //   FROM users
      //   WHERE email = '${email}';
      // `);
      const res = await client.query(`
        SELECT tags.name
        FROM tags
        INNER JOIN logs_tags ON tags.id = logs_tags.id_tag
        INNER JOIN users ON users.email = '${email}'
        GROUP BY tags.name;
      `);
      callback(null, res.rows);
    } finally {
      client.release();
    }
  })().catch((err) => console.error(err.stack));
};

export default executeUserQuery;

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   const session = await getSession({ req });
//   console.log('email address of logged in user', session.user.email);

//   return { props: {} };
// }
