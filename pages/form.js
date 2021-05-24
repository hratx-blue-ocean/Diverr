import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export default function AddNewLogForm() {
  return (
    <form>
      <Grid container spacing={3} direction="row">
        <Grid item xs={6} spacing={3} direction="column">
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Date"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="City"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Country"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Dive Site"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Dive Center"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Dive Instructor Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Instructor Cert No."
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={6} spacing={3} direction="column">
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Time In"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Time Out"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Start air pressure"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="End air pressure"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Maximum Depth"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="outlined-required"
              label="Actual Bottom Time"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-number"
              label="Residual Nitrogen Time"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-number"
              label="Total Bottom Time"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid>
      <FormGroup>

      </FormGroup>
    </form>
  )
}