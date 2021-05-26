import { React, useState } from "react";
import { Chip, TextField, Button } from "@material-ui/core";
import FormSmallTag from 'common/components/Form/chip.js';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tags: {
    display: "inline-flex",
    flexDirection: "column",
    marginLeft: 50,
  },
}));

export default function FormTags({ tags, setTags }) {
  const [tag, setTag] = useState('');

  const handleChange = (e) => {
    setTag(e.target.value);
  }

  const handleSubmit = (e) => {
    let copy = tags.slice();
    copy.push(tag);
    setTags(copy);
    setTag('');
  }

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={2}>
        <TextField
          onChange={handleChange}
          label="Add Tags"
          name="tags"
          variant="outlined"
          value={tag}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleSubmit} color="primary" variant="contained" fullWidth>
          Add a Tag
          </Button>
      </Grid>
      <Grid item xs={8}>
        {tags.map(chip => <FormSmallTag key={chip} chip={chip} tags={tags} setTags={setTags} />)}
      </Grid>
    </Grid>
  )
}