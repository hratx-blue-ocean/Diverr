import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: 200,
    maxHeight: 200,
    objectFit: "contain",
  },
  tile: {
    minWidth: "120px",
    minHeight: "120px",
  },
}));

export default function FormMedia({ images, setImages }) {
  const classes = useStyles();

  const [image, setImage] = useState("");

  const handleChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    let copy = images.slice();
    copy.push(image);
    setImages(copy);
    setImage("");
  };

  return (
    <>
      <TextField
        onChange={handleChange}
        label="Add Media"
        name="images"
        variant="outlined"
        value={image}
      />
      <Button
        onClick={handleSubmit}
        className={classes.button}
        color="primary"
        variant="contained"
        fullWidth
      >
        Add a Photo/Video
      </Button>
      <GridList className={classes.gridlist} cellHeight={160} cols={4}>
        {images.map((media) => (
          <GridListTile key={media} className={classes.tile}>
            <img className={classes.img} src={media} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}
