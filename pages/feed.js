import Header from "common/widgets/Header";
import Grid from "@material-ui/core/Grid";

import Post from "common/widgets/Post.js";
//import SearchBar from "common/widgets/SearchBar.js";

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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
    </>
  );
}
