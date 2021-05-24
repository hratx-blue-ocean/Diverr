import React from "react";
export default ({tags, selectedTags, addTag, removeTag}) => {
  return (
    <>
    <div className="selectedTagList">
      {/* will map over selectedTags, and display them in a list*/}
    </div>
    <div className="tagList">
      {/* will map over tags. if tag is selected, highlight */}
    </div>
    </>
  )
};