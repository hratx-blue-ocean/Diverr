import React, {useState} from "react";
import splitArrayRows from "common/utils/splitArray.js"
import Box from '@material-ui/core/Box';
export default function renderCarousel(log, changeCurrentPhotos) {
  if (log.photos.length < 4) {
    return (
      <Box className="logDisplayCarousel">
        {log.photos.map((photo, i) => {
          return (
            <Box className="displayCarouselPhoto">
              <img src={photo.url}/>
            </Box>
          );
        })}
      </Box>
    )
  } else {
    return (
      <Grid item container xs={12}>
        <Box className="logDisplayCarousel">
          <Box onClick={() => {changeCurrentPhotos((prev) => prev - 1)}}>Left arrow</Box>
          <Box className="photos">
            {log.photos.slice(currentPhotos - 4, currentPhotos).map((photo, i) => {
              return (
                <Box className="displayCarouselPhoto">
                  <img src={photo.url}/>
                </Box>
              );
            })}
          </Box>
          <Box onClick={() => {changeCurrentPhotos((prev) => {prev + 1})}}>right arrow</Box>
        </Box>
      </Grid>
    )
  }
}