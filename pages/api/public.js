import executeAllLogsQuery from "lib/db/allLogsQuery";
import { getSession } from "next-auth/client";

export default function getAllLogs(req, res) {
    executeAllLogsQuery((err, response) => {
      if (err) {
        console.error(err);
      } else {
        res.send(response);
      }
    })
}