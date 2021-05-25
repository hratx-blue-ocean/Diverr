import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import {
  Typography,
  TextField,
  CheckboxWithLabel,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import AddButton from "common/components/buttons/AddButton.js";
import { useFormik, Field, FormikProvider } from 'formik';

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
  },
  checkboxes: {
    display: "inline-flex",
    flexDirection: "row",
    margin: 50,
  },
  textfield: {
    margin: 5,
  },
}));

const conditions = [
  {
    label: "Hood",
    value: "hood"
  },
  {
    label: "Gloves",
    value: "gloves"
  },
  {
    label: "Boots",
    value: "boots"
  }
];

export default function ColumnFour({formik}) {
  const classes = useStyles();

  // const formik = useFormik({
  //   initialValues: {
  //     check: false,
  //     checked: []
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <Grid item xs={3}>
      <div className={classes.checkboxes}>
        <Grid item xs={6}>
          <Typography variant="h6">Exposure Protection</Typography>
          <FormControl>
            <FormLabel component="legend">Thermal Insulation</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="Wet Suit"
                control={<Radio />}
                label="Wet Suit"
              />
              <FormControlLabel
                value="Dry Suit"
                control={<Radio />}
                label="Dry Suit"
              />
            </RadioGroup>
          </FormControl>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={formik.handleChange} name="checked" value="hood"/>}
                label="Hood"
              />
              <FormControlLabel
                control={<Checkbox onChange={formik.handleChange} name="checked" value="gloves"/>}
                label="Gloves"
              />
              <FormControlLabel
                control={<Checkbox onChange={formik.handleChange} name="checked" value="boots"/>}
                label="Boots"
              />
            </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Conditions</Typography>
          <FormControl>
            <FormLabel component="legend">Environment</FormLabel>
            <RadioGroup>
              <FormControlLabel value="Boat" control={<Radio />} label="Boat" />
              <FormControlLabel
                value="Shore"
                control={<Radio />}
                label="Shore"
              />
              <FormControlLabel
                value="Controlled"
                control={<Radio />}
                label="Controlled Environment"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Water</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="Fresh"
                control={<Radio />}
                label="Fresh"
              />
              <FormControlLabel value="Salt" control={<Radio />} label="Salt" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={formik.handleChange} name="checked" value="waves"/>}
              label="Waves"
            />
            <FormControlLabel
              control={<Checkbox onChange={formik.handleChange} name="checked" value="current"/>}
              label="Current"
            />
          </FormGroup>
        </Grid>
      </div>
    </Grid>
  );
}

