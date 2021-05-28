import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import AddButton from "common/components/buttons/AddButton.js";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  col: {
    flexDirection: "column",
  },
  checkboxArea: {
    display: "inline-flex",
    flexDirection: "row",
    margin: 50,
    marginLeft: -50,
  },
  textfield: {
    margin: 5,
  },
  expAndCondit: {
    borderRadius: 4,
    padding: 10,
    margin: 10,
  },
  environment: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 10,
    color: "#2196f3",
  },
}));

export default function ColumnFour({ formik }) {
  const classes = useStyles();

  return (
    <div className={classes.checkboxArea}>
      <Grid className={classes.expAndCondit} item xs={6}>
        <Typography className={classes.title} variant="h6">
          Exposure Protection
        </Typography>
        <FormControl>
          <FormLabel className={classes.title} component="legend">
            Thermal Insulation
          </FormLabel>
          <RadioGroup onChange={formik.handleChange} name="suitUp">
            <FormControlLabel
              value="wetsuit"
              control={<Radio />}
              label="Wet Suit"
            />
            <FormControlLabel
              value="drysuit"
              control={<Radio />}
              label="Dry Suit"
            />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="hood"
              />
            }
            label="Hood"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="gloves"
              />
            }
            label="Gloves"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="boots"
              />
            }
            label="Boots"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6} className={classes.expAndCondit}>
        <Typography className={classes.title} variant="h6">
          Conditions
        </Typography>
        <FormControl>
          <FormLabel className={classes.title} component="legend">
            Environment
          </FormLabel>
          <RadioGroup
            onChange={formik.handleChange}
            className={classes.environment}
            name="environment"
          >
            <FormControlLabel value="boat" control={<Radio />} label="Boat" />
            <FormControlLabel value="shore" control={<Radio />} label="Shore" />
            <FormControlLabel
              value="controlled"
              control={<Radio />}
              label="Controlled"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel className={classes.title} component="legend">
            Water
          </FormLabel>
          <RadioGroup onChange={formik.handleChange} name="water">
            <FormControlLabel value="fresh" control={<Radio />} label="Fresh" />
            <FormControlLabel value="salt" control={<Radio />} label="Salt" />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="waves"
              />
            }
            label="Waves"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="current"
              />
            }
            label="Current"
          />
        </FormGroup>
      </Grid>
    </div>
  );
}
