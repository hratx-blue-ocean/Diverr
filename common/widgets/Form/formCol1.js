import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useFormik } from "formik";
import {
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  col: {
    backgroundColor: "white",
  },
  textfield: {
    marginRight: "5px",
  },
}));

export default function ColumnOne({ formik }) {
  const classes = useStyles();

  return (
    <>
      <FormControl style={{ padding: "7px" }}>
        <FormLabel component="legend">Privacy</FormLabel>
        <hr />
        <RadioGroup onChange={formik.handleChange} name="privacy">
          <Grid container>
            <Grid item xs={6}>
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>
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
        label="Dive Instructor/Guide"
        name="instructor"
        value={formik.values.instructor}
        onChange={formik.handleChange}
        variant="outlined"
      />
      <TextField
        className={classes.textfield}
        label="Instructor/Guide Cert No."
        name="instructorCert"
        value={formik.values.instructorCert}
        onChange={formik.handleChange}
        variant="outlined"
      />
    </>
  );
}
