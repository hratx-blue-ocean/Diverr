import React, { useState } from "react";
import splitArrayRows from "common/utils/splitArray.js";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "150px",
    height: "150px",
  },
  image: {
    height: "100%",
    width: "100%",
  },
}));
export default function Carousel({ log, changeCurrentPhotos }) {
  const styles = useStyles();
  if (log.photos.length < 4) {
    return (
      <Grid container spacing={4}>
        {log.photos.map((photo, i) => {
          return (
            <Grid
              key={i}
              className={styles.imageContainer}
              item
              xs={12 / log.photos.length}
            >
              <img className={styles.image} src={photo.url} />
            </Grid>
          );
        })}
      </Grid>
    );
  } else {
    return (
      <Grid item container xs={12}>
        <Box className="logDisplayCarousel">
          <Box
            onClick={() => {
              changeCurrentPhotos((prev) => prev - 1);
            }}
          >
            Left arrow
          </Box>
          <Box className="photos">
            {log.photos
              .slice(currentPhotos - 4, currentPhotos)
              .map((photo, i) => {
                return (
                  <Box className={styles.imageContainer} key={i}>
                    <img className={styles.image} src={photo.url} />
                  </Box>
                );
              })}
          </Box>
          <Box
            onClick={() => {
              changeCurrentPhotos((prev) => {
                prev + 1;
              });
            }}
          >
            right arrow
          </Box>
        </Box>
      </Grid>
    );
  }
}
