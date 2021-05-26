import React, { useState } from "react";
import { Box, Typography, Card } from "@material-ui/core";
import filterLogs from "common/utils/filterLogs";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  spacer: {
    height: "5%",
  },
}));
export default function LogList({ logs, selectLog, selectedTags }) {
  const classes = useStyles();
  return (
    <Box className="logList">
      <Typography variant="h5">Dive Logs:</Typography>
      {logs.map((log, i) => {
        if (
          Object.keys(selectedTags).length === 0 ||
          filterLogs(selectedTags, log.tags)
        ) {
          return (
            <>
              <Card
                key={i}
                className="logTitle"
                onClick={() => {
                  selectLog(i);
                }}>
                  Log No. {log.id}: {new Date(log.date).toDateString()} @ {log.dive_site}{" "}
              </Card>
              <Box className={classes.spacer} />
            </>
          );
        }
      })}
    </Box>
  );
}
