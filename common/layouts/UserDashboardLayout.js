import Typography from "@material-ui/core/Typography";
import React, {useState, useEffect} from "react";
import data from "lib/dummyData/dummyData.js";
import TagList from "common/components/DashboardTagList";


export default function UserDashboardLayout({ email }) {
  const [tagList, changeTagList] = useState(data.userTags);
  const [logList, changeLogList] = useState(data.userLogs);
  const [selectedTags, changeSelectedTags] = useState({});
  const toggleSelected = (tag) => {
    changeSelectedTags((prev) => {
      let newSelected = {...prev};
      if (newSelected[tag]) {
        delete newSelected[tag];
      } else {
        newSelected[tag] = tag;
      }
      return newSelected;
    })
  }
  return (
    <>
      <Typography variant="h2" color="primary">
        {`Hello, ${email}`}
      </Typography>
      <TagList tags={tagList} selectedTags={selectedTags} toggleSelected={toggleSelected}/>
      <div>
        USER LOG LIST HERE
      </div>
      <div>
        CURRENT LOG DISPLAY HERE
      </div>
    </>
  );
}
