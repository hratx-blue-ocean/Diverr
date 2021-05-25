import React from "react";
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
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
    marginLeft: 50,
  },
}));

export default function AddNewLogForm() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      date: '',
      city: '',
      country: '',
      site: '',
      center: '',
      instructor: '',
      instructorCert: '',
      timeIn: '',
      timeOut: '',
      startPressure: '',
      endPressure: '',
      depth: '',
      abt: '',
      rnt: '',
      tbt: '',
      visibility: '',
      airTemp: '',
      waterTemp: '',
      weight: '',
      notes: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log('Data submitted')
    },
  });

  return (
    <>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} direction="row">
          <Column1 />
          <Column2 />
          <Column3 />
          <Column4 />
          <div className={classes.col}>
            <h1>Placeholder for tags</h1>
            <AddButton text={"Add Photos or Videos"} />
            {/* <AddButton type="submit" text={"Submit New Log"} /> */}
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </div>
        </Grid>
      </form>
    </>
  );
}
