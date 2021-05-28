import { React, useState } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  col: {
    width: "100%",
    marginLeft: 50,
  },
  textfield: {
    margin: 5,
  },
  submit: {
    height: 56,
    width: "25%",
    marginTop: 50,
    marginBottom: 10,
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
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={1}
          direction="row"
        >
          <Grid item xs={3}>
            <Column1 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column2 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column3 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column4 formik={formik} />
          </Grid>
          <Grid className={classes.col} container spacing={3}>
            <FormTags tags={tags} setTags={setTags} />
            <FormMedia images={images} setImages={setImages} />
          </Grid>
          <Grid justify="center" container spacing={3}>
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
