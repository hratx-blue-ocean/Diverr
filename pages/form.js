import { React, useState } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box } from "@material-ui/core";
import Header from "common/widgets/Header";
import { useSession } from "next-auth/client";
import AddButton from "common/components/buttons/AddButton.js";
import Column1 from "common/widgets/Form/formCol1.js";
import Column2 from "common/widgets/Form/formCol2.js";
import Column3 from "common/widgets/Form/formCol3.js";
import Column4 from "common/widgets/Form/formCol4.js";
import FormTags from "common/widgets/Form/tags.js";
import FormMedia from "common/widgets/Form/photos.js";
import { useFormik } from "formik";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  col: {
    width: "100%",
    backgroundColor: "#e9f7f96e",
  },
  col2: {
    backgroundColor: "#e3f2fd4a",
  },
  textfield: {
    // margin: 5,
  },
  spacer: {
    height: "15px",
  },
}));

export default function AddNewLogForm() {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      city: "",
      country: "",
      site: "",
      center: "",
      instructor: "",
      instructorCert: "",
      timeIn: "",
      timeOut: "",
      startPressure: "",
      endPressure: "",
      depth: "",
      abt: "",
      rnt: "",
      tbt: "",
      visibility: "",
      airTemp: "",
      waterTemp: "",
      weight: "",
      notes: "",
    },
    onSubmit: (values) => {
      values.tags = tags;
      values.images = images;
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Header />
      <form>
        <Grid container spacing={1}>
          <Grid
            item
            xs={3}
            container
            direction="column"
            justify="space-around"
            className={classes.col}
          >
            <Column1 formik={formik} container direction="column" />
          </Grid>
          <Grid item xs={3} container direction="row" className={classes.col2}>
            <Column2 formik={formik} />
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="column"
            className={classes.col}
          >
            <Column3 formik={formik} container direction="column" />
          </Grid>
          <Grid item xs={3} className={classes.col2}>
            <Column4 formik={formik} container direction="column" />
          </Grid>
        </Grid>
        <Box className={classes.spacer} />
        <Grid container className={classes.col}>
          <Grid item xs={6} container direction="column">
            <FormTags tags={tags} setTags={setTags} />
          </Grid>
          <Grid item xs={6} container direction="column">
            <FormMedia images={images} setImages={setImages} />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submit}
              onClick={formik.handleSubmit}
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
