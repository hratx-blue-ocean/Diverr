import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import data from "lib/dummyData/dummyData.js";
import TagList from "common/components/dashboard/DashboardTagList";
import LogList from "common/components/dashboard/DashboardLogList";
import LogDisplay from "common/components/dashboard/DashboardLogDisplay";
import { Grid, Card } from "@material-ui/core";

export default function UserDashboardLayout({ email }) {
  const [tagList, changeTagList] = useState(data.userTags.tags);
  const [logList, changeLogList] = useState(data.userLogs.user.logs);
  const [selectedTags, changeSelectedTags] = useState({});
  const [currentLog, changeLog] = useState(0);
  const toggleSelected = (tag) => {
    changeSelectedTags((prev) => {
      let newSelected = { ...prev };
      if (newSelected[tag]) {
        delete newSelected[tag];
      } else {
        newSelected[tag] = tag;
      }
      return newSelected;
    });
  };
  const selectLog = (logListIndex) => {
    changeLog(logListIndex);
  };
  return (
    <Grid container spacing={2}>
      <Grid item container spacing={0} xs={3}>
        <Grid item xs={12}>
          <Card>
            <Typography variant="span" color="primary">
              {`Hello, ${email}`}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TagList
            tags={tagList}
            selectedTags={selectedTags}
            toggleSelected={toggleSelected}
          />
        </Grid>
        <Grid item xs={12}>
          <LogList
            logs={logList}
            selectLog={selectLog}
            selectedTags={selectedTags}
          />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <LogDisplay log={logList[currentLog]} />
      </Grid>
    </Grid>
  );
}

/*
Grid Container for whole page
  Grid Container Item for page: direction column, xs 12
    Grid Container Item : Column 1 xs 3
      Grid Item for column 1: User Info xs 12
      Grid Item for column 1: Tag List xs 12
      Grid Item for column 1: Log List xs 12
    Grid Item For Column 2: Log Display xs 9

*/
