import React, {useState} from "react";
import {Box, Typography} from '@material-ui/core';
export default function LogList({logs, selectLog, selectedTags}) {
  return (
    <Box className="logList">
      <Typography variant="h5">
        Dive Logs:
      </Typography>
      {logs.map((log, i) => {
        if (Object.keys(selectedTags).length === 0) {
          return (
            <Box key={i} className="logTitle" onClick={() => {
              selectLog(i);
            }}>
              <Box component="span">Log No. {log.id}: {log.date} @ {log.dive_site} </Box>
            </Box>
          );
        }
        let doesInclude = false;
        for (var j = 0; j < log.tags.length; j++) {
          console.log(log.tags[j]);
          if (selectedTags[log.tags[j]]) {
            console.log('something');
            doesInclude = true;
            j = log.tags.length;
          }
        }
        if (doesInclude) {
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