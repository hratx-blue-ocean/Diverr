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
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
}));

export default function ColumnFour({ formik }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={6} style={{ padding: "20px" }}>
        <Typography variant="h6">Exposure Protection</Typography>
        <hr />
        <FormControl>
          <FormLabel component="legend" style={{ color: "#E9F7F9" }}>
            Thermal Insulation
          </FormLabel>
          <RadioGroup onChange={formik.handleChange} name="suitUp">
            <FormControlLabel
              value="wetsuit"
              control={<Radio className={classes.text} color="primary" />}
              label="Wet Suit"
            />
            <FormControlLabel
              value="drysuit"
              control={<Radio className={classes.text} color="primary" />}
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
                className={classes.text}
                color="primary"
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
                className={classes.text}
                color="primary"
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
                className={classes.text}
                color="primary"
              />
            }
            label="Boots"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={6} style={{ padding: "20px" }}>
        <Typography className={classes.title} variant="h6">
          Conditions
        </Typography>
        <hr />
        <FormControl>
          <Grid item xs={6} container justify="space-between">
            <FormLabel component="legend" style={{ color: "#E9F7F9" }}>
              Environment
            </FormLabel>
            <RadioGroup onChange={formik.handleChange} name="environment">
              <FormControlLabel
                value="boat"
                control={<Radio className={classes.text} />}
                label="Boat"
              />
              <FormControlLabel
                value="shore"
                control={<Radio className={classes.text} />}
                label="Shore"
              />
              <FormControlLabel
                value="controlled"
                control={<Radio className={classes.text} />}
                label="Controlled"
              />
            </RadioGroup>
          </Grid>
        </FormControl>
        <FormControl>
          <FormLabel component="legend" style={{ color: "#E9F7F9" }}>
            Water
          </FormLabel>
          <RadioGroup onChange={formik.handleChange} name="water">
            <FormControlLabel
              value="fresh"
              control={<Radio className={classes.text} />}
              label="Fresh"
            />
            <FormControlLabel
              value="salt"
              control={<Radio className={classes.text} />}
              label="Salt"
            />
          </RadioGroup>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={formik.handleChange}
                name="checked"
                value="waves"
                className={classes.text}
                color="primary"
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
                className={classes.text}
                color="primary"
              />
            }
            label="Current"
          />
        </FormGroup>
      </Grid>
    </>
  );
}
