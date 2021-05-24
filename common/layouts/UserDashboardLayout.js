import Typography from "@material-ui/core/Typography";
import React, {useState, useEffect} from "react";
import data from "lib/dummyData/dummyData.js";
import TagList from "common/components/DashboardTagList";
import LogList from "common/components/DashboardLogList";
import LogDisplay from "common/components/DashboardLogDisplay";

export default function UserDashboardLayout({ email }) {
  const [tagList, changeTagList] = useState(data.userTags.tags);
  const [logList, changeLogList] = useState(data.userLogs.user.logs);
  const [selectedTags, changeSelectedTags] = useState({});
  const [currentLog, changeLog] = useState(0);
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
  const selectLog = (logListIndex) => {
    changeLog(logListIndex)
  };
  return (
    <>
      <Typography variant="h2" color="primary">
        {`Hello, ${email}`}
      </Typography>
      <TagList tags={tagList} selectedTags={selectedTags} toggleSelected={toggleSelected}/>
      <br/>
      <LogList logs={logList} selectLog={selectLog} selectedTags={selectedTags}/>
      <br/>
      <LogDisplay log={logList[currentLog]}/>
    </>
  );
}
