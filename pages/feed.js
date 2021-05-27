import Grid from "@material-ui/core/Grid";

import Header from "common/widgets/Header";
import Post from "common/widgets/Post.js";
import SearchBar from "common/widgets/SearchBar.js";
import data from "lib/dummyData/dummyData.js";
import { useEffect, useState } from "react";

export default function Feed() {
  console.log(data.tags);
  const [search, setSearch] = useState(null);

  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <SearchBar tags={data.tags} onSelect={setSearch} search={search} />
        {data.allLogs.logs.map((log) => {
          if (log.tags.includes(search) || search === null) {
            return (
              <div key={log.id}>
                <Post log={log} handleClick={setSearch} />
              </div>
            );
          }
        })}
      </Grid>
    </>
  );
}
