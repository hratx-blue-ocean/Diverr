import Typography from "@material-ui/core/Typography";
import React, { useState, useEffect } from "react";
import data from "lib/dummyData/dummyData.js";
import TagList from "common/components/dashboard/DashboardTagList";
import LogList from "common/components/dashboard/DashboardLogList";
import LogDisplay from "common/components/dashboard/DashboardLogDisplay";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  col2: {},
  root: {
    height: "100vh",
    width: "100vw",
  },
  spacer: {
    height: "5%",
  },
  horizontalSpacer: {
    width: "15px",
  },
  col1Container: {
    padding: "25px",
  },
  col1Item: {
    backgroundColor: "blue",
  },
  scrollTags: {
    backgroundColor: "blue",
    overflowX: "scroll",
    height: "30%",
  },
  scrollLogs: {
    backgroundColor: "blue",
    overflowX: "scroll",
    height: "60%",
  },
}));

export default function UserDashboardLayout({ email }) {
  const classes = useStyles();
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
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={4} direction="column" className={classes.col1Container}>
        <Card className={classes.col1Item}>
          <Typography variant="span" color="primary">
            {`Hello, ${email}`}
          </Typography>
        </Card>
        <Box className={classes.spacer} />
        <Box className={classes.scrollTags}>
          <TagList
            tags={tagList}
            selectedTags={selectedTags}
            toggleSelected={toggleSelected}
          />
        </Box>
        <Box className={classes.spacer} />
        <Box className={classes.scrollLogs}>
          <LogList
            logs={logList}
            selectLog={selectLog}
            selectedTags={selectedTags}
          />
        </Box>
      </Grid>
      <Grid container item xs={8} style={{ backgroundColor: "black" }}>
        {/* <Box style={{ width: '300px', height: '300px', backgroundColor: 'black'}}>Hello</Box> */}
        {/* <LogDisplay log={logList[currentLog]} /> */}
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
