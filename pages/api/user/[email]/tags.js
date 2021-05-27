import executeUserTagsQuery from "lib/db/userTagsQuery";

<<<<<<< HEAD
export default function getUserTags(req, res) {
    executeUserTagsQuery(req.query.email, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        res.send(response);
      }
    })
=======
export default function getUser(req, res) {
  executeUserQuery(req.query.email, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      res.send(response);
    }
  });
>>>>>>> master
}
