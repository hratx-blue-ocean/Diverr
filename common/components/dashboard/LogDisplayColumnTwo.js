import React, { useState } from "react";
import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid, Card, Typography } from "@material-ui/core";
export default function logDisplayColumn1({ log }) {
  return (
    <Grid className="logDisplayColumn2" container item xs={4} spacing={3}>
      <Grid className="diveConditions" item xs={12}>
        <Card>
          <Typography variant="h4">Dive Conditions</Typography>
          <Box>Visibility: {log.visibility}</Box>
          <Box>Air Temp: {log.air_temp}</Box>
          <Box>Water Temp: {log.water_temp}</Box>
          <Box>
            Conditions: {log.salt_water ? "Salt-Water" : "Fresh-Water?"},{" "}
            {log.boat ? "Boat" : "No Boat"},{" "}
            {log.current ? "Current" : "No Current"}
          </Box>
        </Card>
      </Grid>
      <Grid className="gear" item xs={12}>
        <Card>
          <Typography variant="h4">Dive Gear</Typography>
          <Box>{log.wetsuit ? "Wet Suit" : "Dry Suit"}</Box>
          <Box>
            {log.hood ? "Hood, " : "No Hood,"}
            {log.gloves ? "Gloves " : "No Gloves"}
          </Box>
          <Box>{log.weight}</Box>
        </Card>
      </Grid>
      <Grid className="diveMetrics" item xs={12}>
        <Card>
          <Typography variant="h4">Dive Metrics</Typography>
          <Box>Start Pressure: {log.start_pressure}</Box>
          <Box>End Pressure: {log.end_pressure}</Box>
          <Box>Start Time: {log.time_in}</Box>
          <Box>End Time: {log.time_out}</Box>
        </Card>
      </Grid>
    </Grid>
  );
}
