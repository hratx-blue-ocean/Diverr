import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Grid, GridList, GridListTile, Box } from "@material-ui/core";
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
  text: {
    color: theme.palette.lightBlue.main,
    fontSize: "1rem",
  },
  input: {
    borderWidth: "2px",
    borderColor: "#E9F7F9",
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
          Add a Photo/Video
        </Button>
      </Box>
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
