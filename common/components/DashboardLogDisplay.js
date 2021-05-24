import React, {useState} from "react";
export default function LogList({log}) {
  return (
    <div className="logDisplay">
      {log.country}
    </div>
  )
};