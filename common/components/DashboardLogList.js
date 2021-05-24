import React, {useState} from "react";
export default function LogList({logs, selectLog, selectedTags}) {
  return (
    <div className="logList">
      {logs.map((log, i) => {
        if (Object.keys(selectedTags).length === 0) {
          return (
            <div key={i} className="logTitle" onClick={() => {
              selectLog(i);
            }}>
              <span>Log No. {log.id}: {log.date} @ {log.dive_site} </span>
            </div>
          );
        }
        let doesInclude = false;
        for (var j = 0; j < log.tags.length; j++) {
          console.log(log.tags[j]);
          if (selectedTags[log.tags[j]]) {
            console.log('something');
            doesInclude = true;
            j = log.tags.length;
          }
        }
        if (doesInclude) {
          return (
            <div key={i} className="logTitle" onClick={() => {
              selectLog(i);
            }}>
                <span>Log No. {log.id}: {log.date} @ {log.dive_site} </span>
            </div>
          );
        }
      })}
    </div>
  )
};