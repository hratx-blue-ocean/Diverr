import React, { useState } from "react";
import { Chip, Box, Grid, Card, Typography } from "@material-ui/core";
import renderTags from "common/components/dashboard/renderTags";
import renderCarousel from "common/components/dashboard/renderCarousel";
export default function LogDisplay({ log }) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  return (
    <Grid container spacing={3}>
      <Grid className="logDisplay" container item xs={12} spacing={2}>
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
        <Grid className="logDisplayCarousel" item container xs={12}>
          {renderTags(log)}
          {renderCarousel(log, changeCurrentPhotos)}
        </Grid>
      </Grid>
    </Grid>
  );
}
