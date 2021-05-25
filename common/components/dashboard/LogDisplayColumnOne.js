import React, { useState } from "react";
import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid, Card, Typography } from "@material-ui/core";
export default function logDisplayColumn1({ log }) {
  return (
    <Grid className="logDisplayColumn1" container item xs={8} spacing={2}>
      <Grid className="basicDiveInfo" item xs={12}>
        <Card>
          <Box>
            Date: {log.date} Dive Number: {log.id}
          </Box>
          <Box>
            {log.dive_site}, {log.city}, {log.country} {"\n"}
          </Box>
          <Box>
            {log.dive_center}, {log.dive_instructor}, {log.instructor_cert}
          </Box>
        </Card>
      </Grid>
      <Grid className="diveGraphBox" item container xs={12} spacing={2}>
        <Card>
          <Grid className="graphInfoBox1" item>
            <Box> RNT {log.rnt}</Box>
            <Box> ABT {log.abt}</Box>
            <Box> TBT {log.tbt}</Box>
          </Grid>
          <Grid className="graphInfoBox2" item>
            <Box> Cumulative Time: FILL THIS OUT WITH NEW DATA</Box>
          </Grid>
        </Card>
      </Grid>
      <Grid className="notes" item>
        <Card>
          <Box>
            Notes: <br />
            {log.notes}
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
