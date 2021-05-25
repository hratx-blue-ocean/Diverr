import executeQuery from "lib/db/index";

export default function getUser(req, res) {
  res.send(
    executeQuery("19ccrow99@gmail.com", (err, response) => {
      if (err) {
        console.error(err);
      } else {
        console.log("/api/user response", response);
        return response;
      }
    })
  );
}
