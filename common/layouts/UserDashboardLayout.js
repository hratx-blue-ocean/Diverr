import Typography from "@material-ui/core/Typography";
import React, {useState, useEffect} from "react";
import data from "lib/dummyData/dummyData.js";


export default function UserDashboardLayout({ email }) {
  const [tagList, changeTagList] = useState(data.userTags);
  const [logList, changeLogList] = useState(data.userLogs);
  useEffect(() => {
    data.userLogs
  }, [])
  return (
    <>
      <Typography variant="h2" color="primary">
        {`Hello, ${email}`}
      </Typography>
      <div>
          USER TAG LIST HERE
      </div>
      <div>
        USER LOG LIST HERE
      </div>
      <div>
        CURRENT LOG DISPLAY HERE
      </div>
    </>
  );
}
