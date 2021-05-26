import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   tags: {
//     display: "inline-flex",
//     flexDirection: "column",
//     marginLeft: 50,
//   },
// }));

export default function FormMedia({ images, setImages }) {
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    setImage(e.target.value);
  }

  const handleSubmit = (e) => {
    let copy = images.slice();
    copy.push(image);
    setImages(copy);
    setImage('');
  }

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={2}>
        <TextField
          onChange={handleChange}
          label="Add Media"
          name="images"
          variant="outlined"
          value={image}
        />
      </Grid>
      <Grid item xs={2}>
        <Button onClick={handleSubmit} color="primary" variant="contained" fullWidth>
          Add a Photo/Video
        </Button>
      </Grid>
      <Grid item xs={8}>
        <GridList>
          {images.map(media =>
            <GridListTile key={media}>
              <img src={media} />
            </GridListTile>
          )}
        </GridList>
      </Grid>
    </Grid>
  )
}