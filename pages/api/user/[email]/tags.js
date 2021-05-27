import executeUserQuery from "lib/db/userQuery";
import { getSession } from "next-auth/client";

export default function getUser(req, res) {
  executeUserQuery(req.query.email, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
}
