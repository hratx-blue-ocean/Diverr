import React, { useState } from "react";
import splitArrayRows from "common/utils/splitArray.js";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: "150px",
    width: "150px",
  },
  image: {
    height: "100%",
    width: "auto",
  },
}));

export default function renderCarousel(log, changeCurrentPhotos) {
  const classes = useStyles();

  if (log.photos.length < 4) {
    return (
      <Box className="logDisplayCarousel">
        {log.photos.map((photo, i) => {
          return (
            <Box className={classes.imageContainer}>
              <img className={classes.image} src={photo.url} alt="" />
            </Box>
          );
        })}
      </Box>
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
                  <Box className={classes.imageContainer}>
                    <img className={classes.image} src={photo.url} alt="" />
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
