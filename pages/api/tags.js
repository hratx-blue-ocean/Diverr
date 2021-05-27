import executeTagQuery from "lib/db/allTagsQuery";
import { getSession } from "next-auth/client";

export default function getAllTags(req, res) {
    executeTagQuery((err, response) => {
      if (err) {
        console.error(err);
      } else {
        res.send(response);
      }
    })
}