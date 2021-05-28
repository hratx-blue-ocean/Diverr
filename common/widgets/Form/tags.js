import { React, useState } from "react";
import { Chip, TextField, Button, Box } from "@material-ui/core";
import FormSmallTag from "common/components/Form/chip.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tags: {
    minHeight: "200px",
    minWidth: "100%",
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
  input: {
    borderWidth: "2px",
    borderColor: "#E9F7F9",
  },
}));

export default function FormTags({ tags, setTags }) {
  const classes = useStyles();
  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  const handleSubmit = (e) => {
    let copy = tags.slice();
    copy.push(tag);
    setTags(copy);
    setTag("");
  };

  return (
    <>
      <TextField
        onChange={handleChange}
        label="Add Tags"
        name="tags"
        variant="outlined"
        value={tag}
        color="primary"
        InputProps={{
          classes: { notchedOutline: classes.input },
          className: classes.text,
        }}
        InputLabelProps={{ style: { color: "#E9F7F9" } }}
        fullWidth={true}
      />
      <Box style={{ padding: "10px" }}>
        <Button
          onClick={handleSubmit}
          className={classes.button}
          color="primary"
          variant="contained"
          fullWidth
        >
          Add a Tag
        </Button>
      </Box>
      <Box className={classes.tags}>
        {tags.map((chip) => (
          <FormSmallTag key={chip} chip={chip} tags={tags} setTags={setTags} />
        ))}
      </Box>
    </>
  );
}
