import { React, useState } from "react";
import { Chip, TextField, Button} from "@material-ui/core";
import FormSmallTag from 'common/components/Form/chip.js';



export default function FormTags() {
  const [tag, setTag] = useState();
  const [tags, setTags] = useState([]);

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
    <>
      <TextField
        onChange={handleChange}
        label="Add Tags"
        name="tags"
        variant="outlined"
      />
      <Button onClick={handleSubmit} color="primary" variant="contained" fullWidth>
        Add a Tag
      </Button>
      {console.log({tags})}
      {tags.map(chip => <FormSmallTag key={chip} chip={chip} tags={tags} setTags={setTags}/>)}
    </>
  )
}