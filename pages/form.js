import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "common/components/Header";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import AddButton from "common/components//buttons/AddButton.js";


const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column"
  },
  checkboxes: {
    display: "inline-flex",
    flexDirection: "row"
  },
  textfield: {
    margin: 5
  }
}));

export default function AddNewLogForm() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <form>
        <Grid container spacing={3} direction="row">

          {/* Column 1 */}

          <Grid item xs={3}>
            <div className={classes.col}>
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Date"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="City"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Country"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Dive Site"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Dive Center"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Dive Instructor Name"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Instructor Cert No."
                variant="outlined"
              />
            </div>
          </Grid>

          {/* Column 2 */}

          <Grid item xs={3}>
            <div className={classes.col}>
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Time In"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Time Out"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Start air pressure"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="End air pressure"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-required"
                label="Maximum Depth"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                required
                id="outlined-number"
                label="Actual Bottom Time"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                id="outlined-number"
                label="Residual Nitrogen Time"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                id="outlined-number"
                label="Total Bottom Time"
                variant="outlined"
              />
            </div>
          </Grid>

          {/* Column 3 */}

          <Grid item xs={3}>
            <div className={classes.col}>
              <TextField
                className={classes.textfield}
                id="outlined"
                label="Visibility"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                id="outlined"
                label="Air Temperature"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                id="outlined-required"
                label="Water Temperature"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                id="outlined"
                label="Weight"
                variant="outlined"
              />
              <TextField
                className={classes.textfield}
                multiline
                rows={10}
                id="outlined-multiline-static"
                label="Notes"
                variant="outlined"
              />
            </div>
          </Grid>

          {/* Column 4 (radio and checkboxes) */}

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
        </Grid>
        <div className={classes.col}>
          <h1>Placeholder for tags</h1>
          <AddButton text={"Add Photos or Videos"}/>
          <AddButton text={"Submit New Log"}/>
        </div>
      </form>
    </>
  )
}