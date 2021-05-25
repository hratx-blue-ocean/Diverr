import React, { useState } from "react";
import { Chip, Box, Grid, Card, Typography } from "@material-ui/core";
import renderTags from "common/components/dashboard/renderTags";
import renderCarousel from "common/components/dashboard/renderCarousel";
import LogDisplayColumn1 from "common/components/dashboard/LogDisplayColumnOne";
import LogDisplayColumn2 from "common/components/dashboard/LogDisplayColumnTwo";
export default function LogDisplay({ log }) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  return (
    <Grid container spacing={3}>
      <Grid className="logDisplay" container item xs={12} spacing={2}>
        <LogDisplayColumn1 log={log} />
        <LogDisplayColumn2 log={log} />
        <Grid className="logDisplayCarousel" item container xs={12}>
          {renderTags(log)}
          {renderCarousel(log, changeCurrentPhotos)}
        </Grid>
      </Grid>
    </Grid>
  );
}
