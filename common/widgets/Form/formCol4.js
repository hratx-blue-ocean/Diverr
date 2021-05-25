import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "common/components/Header";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import AddButton from "common/components/buttons/AddButton.js";

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column"
  },
  checkboxes: {
    display: "inline-flex",
    flexDirection: "row",
    margin: 50
  },
  textfield: {
    margin: 5
  }
}));

export default function ColumnFour() {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <div className={classes.checkboxes}>
        <Grid item xs={6}>
          <Typography variant="h6">
            Exposure Protection
                </Typography>
          <FormControl>
            <FormLabel component="legend">Thermal Insulation</FormLabel>
            <RadioGroup>
              <FormControlLabel value="Wet Suit" control={<Radio />} label="Wet Suit" />
              <FormControlLabel value="Dry Suit" control={<Radio />} label="Dry Suit" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  name="Hood"
                />}
              label="Hood"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  name="Gloves"
                />}
              label="Gloves"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  name="Boots"
                />}
              label="Boots"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            Conditions
                </Typography>
          <FormControl>
            <FormLabel component="legend">Environment</FormLabel>
            <RadioGroup>
              <FormControlLabel value="Boat" control={<Radio />} label="Boat" />
              <FormControlLabel value="Shore" control={<Radio />} label="Shore" />
              <FormControlLabel value="Controlled" control={<Radio />} label="Controlled Environment" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Water</FormLabel>
            <RadioGroup>
              <FormControlLabel value="Fresh" control={<Radio />} label="Fresh" />
              <FormControlLabel value="Salt" control={<Radio />} label="Salt" />
            </RadioGroup>
          </FormControl>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  name="Waves"
                />}
              label="Waves"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={false}
                  name="Current"
                />}
              label="Current"
            />
          </FormGroup>
        </Grid>
      </div>
    </Grid>
  )
}

