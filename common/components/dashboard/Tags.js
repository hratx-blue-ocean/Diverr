import React, { useState } from "react";
import { Chip, Box, Grid } from "@material-ui/core";
import splitArrayRows from "common/utils/splitArray.js";

export default function Tags({ log }) {
  return (
    <Grid item xs={12}>
      {log.tags.map((tag, tagIndex) => {
        return <Chip key={tagIndex} label={tag} size="small" />;
      })}
    </Grid>
  );
}
