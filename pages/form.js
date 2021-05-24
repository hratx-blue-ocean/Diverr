import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "common/components/Header";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import { Typography, TextField, Checkbox, FormControlLabel, FormGroup, FormControl, FormLabel, Radio, RadioGroup} from '@material-ui/core';

export default function AddNewLogForm() {
  return (
    <>
      <Header />
      <form>
        <Grid container spacing={3} direction="row">
          <Grid item xs={3}>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Date"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="City"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Country"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Dive Site"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Dive Center"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Dive Instructor Name"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Instructor Cert No."
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid item>
              <TextField
                id="outlined"
                label="Visibility"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined"
                label="Air Temperature"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Water Temperature"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined"
                label="Weight"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3} spacing={3}>
              <Grid item xs={6} spacing={3}>
                <Typography variant="h6">
                  Exposure Protection
                </Typography>
                <FormControl>
                  <FormLabel component="legend">Thermal Insulation</FormLabel>
                  <RadioGroup>
                    <FormControlLabel value="Wet Suit" control={<Radio />} label="Wet Suit"/>
                    <FormControlLabel value="Dry Suit" control={<Radio />} label="Dry Suit"/>
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
              <Grid item xs={6} spacing={3}>
                <Typography variant="h6">
                  Conditions
                </Typography>
                <FormControl>
                  <FormLabel component="legend">Environment</FormLabel>
                  <RadioGroup>
                    <FormControlLabel value="Boat" control={<Radio />} label="Boat"/>
                    <FormControlLabel value="Shore" control={<Radio />} label="Shore"/>
                    <FormControlLabel value="Controlled" control={<Radio />} label="Controlled Environment"/>
                  </RadioGroup>
                </FormControl>
                <FormControl>
                  <FormLabel component="legend">Water</FormLabel>
                  <RadioGroup>
                    <FormControlLabel value="Fresh" control={<Radio />} label="Fresh"/>
                    <FormControlLabel value="Salt" control={<Radio />} label="Salt"/>
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
            </Grid>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Time In"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Time Out"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Start air pressure"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="End air pressure"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Maximum Depth"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-number"
                label="Actual Bottom Time"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-number"
                label="Residual Nitrogen Time"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-number"
                label="Total Bottom Time"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  )
}