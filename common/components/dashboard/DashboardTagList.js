import React, { useState } from "react";
import { Chip } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import splitArrayRows from "common/utils/splitArray.js";
export default function TagList({ tags, selectedTags, toggleSelected }) {
  let tagRows = splitArrayRows(tags, 3);
  return (
    <Box>
      <Box className="selectedTagList">
        <Box component="span">Selected Tags: </Box>
        {
          /* will map over selectedTags, and display them in a list*/
          Object.keys(selectedTags).map((tag, index) => {
            return (
              <Chip
                key={index}
                className="selectedListTag"
                color="primary"
                label={tag}
                onDelete={() => {
                  toggleSelected(tag);
                }}
              />
            );
          })
        }
      </Box>
      <Box className="tagList">
        {tagRows.map((row, rowIndex) => {
          return (
            <Box key={rowIndex} className="tagRow">
              {row.map((tag, tagIndex) => {
                return (
                  <Chip
                    key={tagIndex}
                    className="dashboard-tag"
                    label={tag}
                    onClick={() => {
                      toggleSelected(tag);
                    }}
                    color={selectedTags[tag] ? "primary" : "secondary"}
                  />
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
