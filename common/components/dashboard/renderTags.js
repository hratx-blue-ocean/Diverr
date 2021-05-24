import React, {useState} from "react";
import { Chip } from '@material-ui/core';
import splitArrayRows from "common/utils/splitArray.js"
export default function renderTags(log) {
    return (
      <div className="displayTags">
        {log.tags.map((tag, tagIndex) => {
          return <Chip key={tagIndex} className="dashboardDisplayTag" label={tag} />
        })}
      </div>
    );
}