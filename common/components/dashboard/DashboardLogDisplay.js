import React, {useState} from "react";
import { Chip } from '@material-ui/core';
import renderTags from "common/components/dashboard/renderTags";
import renderCarousel from "common/components/dashboard/renderCarousel";
export default function LogDisplay({log}) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  return (
    <div className="logDisplay">
      <div className="logDisplayColumn1">
        <div className="basicDiveInfo">
          <div>Date: {log.date}   Dive Number: {log.id}</div>
          <div>{log.dive_site}, {log.city}, {log.country} {'\n'}</div>
          <div>{log.dive_center}, {log.dive_instructor}, {log.instructor_cert}</div>
        </div>
        <br/>
        <div className="diveGraphBox">
          A Graph here reflecting info from the dive?
          <div className="graphInfoBox1">
            <div> RNT {log.rnt}</div>
            <div> ABT {log.abt}</div>
            <div> TBT {log.tbt}</div>
          </div>
          <div className="graphInfoBox2">
            <div> Cumulative Time: FILL THIS OUT WITH NEW DATA</div>
          </div>
        </div>
        <div className="notes">
          Notes: <br/>
          {log.notes}
        </div>
      </div>
      <div className="logDisplayColumn2">
        <div className="diveConditions">
          <h3>Dive Conditions</h3>
          <div>Visibility: {log.visibility}</div>
          <div>Air Temp: {log.air_temp}</div>
          <div>Water Temp: {log.water_temp}</div>
          <div>Conditions: {log.salt_water? 'Salt-Water' : 'Fresh-Water?'}, {log.boat? 'Boat' : 'No Boat'}, {log.current? 'Current' : 'No Current'}</div>
        </div>
        <div className="gear">
          <h3>Dive Gear</h3>
          <div>{log.wetsuit? 'Wet Suit' : 'Dry Suit'}</div>
          <div>{log.hood? 'Hood, ': 'No Hood,'}{log.gloves? 'Gloves ' : 'No Gloves'}</div>
          <div>{log.weight}</div>
        </div>
        <div className="diveMetrics">
          <h3>Dive Metrics</h3>
          <div>Start Pressure: {log.start_pressure}</div>
          <div>End Pressure: {log.end_pressure}</div>
          <div>Start Time: {log.time_in}</div>
          <div>End Time: {log.time_out}</div>
        </div>
      </div>
      <div className="logDisplayCarousel">
        {renderTags(log)}
        {renderCarousel(log, changeCurrentPhotos)}
      </div>
    </div>
  )
};