import Grid from "@material-ui/core/Grid";

import Header from "common/widgets/Header";
import Post from "common/widgets/Post.js";
// import SearchBar from "common/widgets/SearchBar.js";
import data from "lib/dummyData/dummyData.js";

export default function Feed() {
  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {data.allLogs.logs.map((log) => (
          <div key={log.id}>
            <Post log={log} />
          </div>
        ))}
      </Grid>
    </>
  );
}
