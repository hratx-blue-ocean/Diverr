import React, {useState} from "react";
import { Chip } from '@material-ui/core';
import splitArrayRows from "common/utils/splitArray.js"
export default function renderCarousel(log, changeCurrentPhotos) {
  if (log.photos.length < 4) {
    return (
      <div className="logDisplayCarousel">
        {log.photos.map((photo, i) => {
          return (
            <div className="displayCarouselPhoto">
              <img src={photo.url}/>
            </div>
          );
        })}
      </div>
    )
  } else {
    return (
      <div className="logDisplayCarousel">
        <span onClick={() => {changeCurrentPhotos((prev) => prev - 1)}}>Left arrow</span>
        <div className="photos">
          {log.photos.slice(currentPhotos - 4, currentPhotos).map((photo, i) => {
            return (
              <div className="displayCarouselPhoto">
                <img src={photo.url}/>
              </div>
            );
          })}
        </div>
        <span onClick={() => {changeCurrentPhotos((prev) => {prev + 1})}}>right arrow</span>
      </div>
    )
  }
}