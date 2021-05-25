import React, {useState} from "react";
import {Box, Typography} from '@material-ui/core';
import filterLogs from 'common/utils/filterLogs';
export default function LogList({logs, selectLog, selectedTags}) {
  return (
    <Box className="logList">
      <Typography variant="h5">
        Dive Logs:
      </Typography>
      {logs.map((log, i) => {
        if ((Object.keys(selectedTags).length === 0) || filterLogs(selectedTags, log.tags)) {
          return (
            <Box key={i} className="logTitle" onClick={() => {
              selectLog(i);
            }}>
              <Box component="span">Log No. {log.id}: {log.date} @ {log.dive_site} </Box>
            </Box>
          );
        }
      })}
    </Box>
  )
};