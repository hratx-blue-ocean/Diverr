import Header from "common/components/Header";
import Grid from "@material-ui/core/Grid";

import Post from "common/widgets/Post.js";

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
