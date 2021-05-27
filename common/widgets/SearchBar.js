/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.lightBlue.main,
  },
}));

export default function SearchBar({ tags, onSelect, search }) {
  const classes = useStyles();
  return (
    <Autocomplete
      value={search}
      onChange={(event, value) => onSelect(value)}
      className={classes.root}
      id="search box"
      options={tags}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search the tag you like"
          variant="filled"
          color="primary"
        />
      )}
    />
  );
}
