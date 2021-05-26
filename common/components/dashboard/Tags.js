import React, { useState } from "react";
import { Chip, Box, Grid } from "@material-ui/core";
import splitArrayRows from "common/utils/splitArray.js";

export default function Tags({ log }) {
  return (
    <Grid container item xs={12} spacing={1}>
      {log.tags.map((tag, tagIndex) => {
        return <Grid><Chip key={tagIndex} label={tag} size="small" /></Grid>;
      })}
    </Grid>
  );
}
