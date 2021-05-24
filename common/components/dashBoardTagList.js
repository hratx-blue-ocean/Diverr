import React, {useState} from "react";
import { Chip } from '@material-ui/core';
import splitArrayRows from "common/utils/splitArray.js"
export default function TagList({tags, selectedTags, toggleSelected}) {
  let tagRows = splitArrayRows(tags, 3);
  return (
    <>
      <div className="selectedTagList">
        <span>Selected Tags: </span>
        {
          /* will map over selectedTags, and display them in a list*/
          Object.keys(selectedTags).map((tag, index) => {
            return <Chip key={index} className="selectedListTag" label={tag} onDelete={() => {toggleSelected(tag)}}/>;
          })
        }
      </div>
      <div className="tagList">
        {
          tagRows.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="tagRow">
                {row.map((tag, tagIndex) => {
                  if (selectedTags[tag]) {
                    // make span highlighted
                    return <Chip key={tagIndex} className="dashboard-tag" label={tag} onClick={() => {toggleSelected(tag)}} />
                  } else {
                    return <Chip key={tagIndex} className="dashboard-tag" label={tag} onClick={() => {toggleSelected(tag)}} />
                  }
                })}
              </div>
            )
          })
        }
      </div>
    </>
  )
};