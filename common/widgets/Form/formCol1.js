import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import { useFormik } from 'formik';

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
    margin: 50,
  },
  textfield: {
    margin: 5,
  },
}));

export default function ColumnOne() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      date: '',
      city: '',
      country: '',
      site: '',
      center: '',
      instructor: '',
      instructorCert: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid item xs={3}>
      <div className={classes.col}>
        <TextField
          className={classes.textfield}
          required
          type="date"
          label="Date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className={classes.textfield}
          required
          label="City"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Country"
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Dive Site"
          name="site"
          value={formik.values.site}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Dive Center"
          name="center"
          value={formik.values.center}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Dive Instructor Name"
          name="instructor"
          value={formik.values.instructor}
          onChange={formik.handleChange}
          variant="outlined"
        />
        <TextField
          className={classes.textfield}
          required
          label="Instructor Cert No."
          name="instructorCert"
          value={formik.values.instructorCert}
          onChange={formik.handleChange}
          variant="outlined"
        />
      </div>
    </Grid>
  );
}
