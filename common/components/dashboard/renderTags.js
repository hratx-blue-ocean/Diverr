import React, {useState} from "react";
import { Chip, Box, Grid } from '@material-ui/core';
import splitArrayRows from "common/utils/splitArray.js"
export default function renderTags(log) {
    return (
      <Grid item xs={12}>
        <Box className="displayTags">
          {log.tags.map((tag, tagIndex) => {
            return <Chip key={tagIndex} className="dashboardDisplayTag" label={tag} />
          })}
        </Box>
      </Grid>
    );
}