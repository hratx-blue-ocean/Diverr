import React, { useState } from "react";
import { Chip, Box, Grid, Card, Typography } from "@material-ui/core";
import Tags from "common/components/dashboard/Tags";
import Carousel from "common/components/dashboard/Carousel";
import LogDisplayColumn1 from "common/components/dashboard/LogDisplayColumnOne";
import LogDisplayColumn2 from "common/components/dashboard/LogDisplayColumnTwo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  widthSpacer: {
    width: "5px",
  },
  heightSpacer: {
    height: "15px",
  },
}));

export default function LogDisplay({ log }) {
  const [currentPhotos, changeCurrentPhotos] = useState(4);
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid container direction="column" item xs={7}>
          <LogDisplayColumn1 log={log} />
        </Grid>
        <Grid item xs={1} />
        <Grid container direction="column" item xs={4}>
          <LogDisplayColumn2 log={log} />
        </Grid>
        <Grid container item xs={12}>
          <Tags log={log} />
          <Carousel log={log} changeCurrentPhotos={changeCurrentPhotos} />
        </Grid>
      </Grid>
    </>
  );
}
