import React, { useState } from "react";
import { Chip, Box } from "@material-ui/core";
import renderTags from "common/components/dashboard/renderTags";
import renderCarousel from "common/components/dashboard/renderCarousel";
export default function LogDisplay({ log }) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  return (
    <Box className="logDisplay">
      <Box className="logDisplayColumn1">
        <Box className="basicDiveInfo">
          <Box>
            Date: {log.date} Dive Number: {log.id}
          </Box>
          <Box>
            {log.dive_site}, {log.city}, {log.country} {"\n"}
          </Box>
          <Box>
            {log.dive_center}, {log.dive_instructor}, {log.instructor_cert}
          </Box>
        </Box>
        <br />
        <Box className="diveGraphBox">
          A Graph here reflecting info from the dive?
          <Box className="graphInfoBox1">
            <Box> RNT {log.rnt}</Box>
            <Box> ABT {log.abt}</Box>
            <Box> TBT {log.tbt}</Box>
          </Box>
          <Box className="graphInfoBox2">
            <Box> Cumulative Time: FILL THIS OUT WITH NEW DATA</Box>
          </Box>
        </Box>
        <Box className="notes">
          Notes: <br />
          {log.notes}
        </Box>
      </Box>
      <Box className="logDisplayColumn2">
        <Box className="diveConditions">
          <h3>Dive Conditions</h3>
          <Box>Visibility: {log.visibility}</Box>
          <Box>Air Temp: {log.air_temp}</Box>
          <Box>Water Temp: {log.water_temp}</Box>
          <Box>
            Conditions: {log.salt_water ? "Salt-Water" : "Fresh-Water?"},{" "}
            {log.boat ? "Boat" : "No Boat"},{" "}
            {log.current ? "Current" : "No Current"}
          </Box>
        </Box>
        <Box className="gear">
          <h3>Dive Gear</h3>
          <Box>{log.wetsuit ? "Wet Suit" : "Dry Suit"}</Box>
          <Box>
            {log.hood ? "Hood, " : "No Hood,"}
            {log.gloves ? "Gloves " : "No Gloves"}
          </Box>
          <Box>{log.weight}</Box>
        </Box>
        <Box className="diveMetrics">
          <h3>Dive Metrics</h3>
          <Box>Start Pressure: {log.start_pressure}</Box>
          <Box>End Pressure: {log.end_pressure}</Box>
          <Box>Start Time: {log.time_in}</Box>
          <Box>End Time: {log.time_out}</Box>
        </Box>
      </Box>
      <Box className="logDisplayCarousel">
        {renderTags(log)}
        {renderCarousel(log, changeCurrentPhotos)}
      </Box>
    </Box>
  );
}
