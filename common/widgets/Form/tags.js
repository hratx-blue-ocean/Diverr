import { React, useState } from "react";
import { Chip, TextField, Button } from "@material-ui/core";
import FormSmallTag from "common/components/Form/chip.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textfield: {
    margin: 5,
    '& input + fieldset': {
      borderColor: '#2196f3',
      borderWidth: 1,
    }
  },
  button: {
    height: 56,
    margin: 5
  },
  tags: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    color: '#2196f3'
  },
  values: {
    color: '#2196f3'
  }
}));

export default function FormTags({ tags, setTags }) {
  const classes = useStyles();
  const [tag, setTag] = useState('');

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
    <Grid container spacing={3} direction="row">
      <Grid item xs={2}>
        <TextField
          onChange={handleChange}
          label="Add Tags"
          name="tags"
          variant="outlined"
          value={tag}
          className={classes.textfield}
          InputLabelProps={{
            className: classes.input
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleSubmit} className={classes.button} color="primary" variant="contained" fullWidth>
          Add a Tag
        </Button>
      </Grid>
      <Grid className={classes.tags} item xs={8}>
        {tags.map(chip => <FormSmallTag key={chip} chip={chip} tags={tags} setTags={setTags} />)}
      </Grid>
    </Grid>
  );
}
