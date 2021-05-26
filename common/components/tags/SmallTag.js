import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function SmallTag({ tagName, handleClick }) {
  const classes = useStyles();
  return (
    <>
      {
        handleClick
        ? <Chip label={tagName} size="small" className={classes.chip} clickable onClick={() => handleClick(tagName)}/>
        : <Chip label={tagName} size="small" className={classes.chip} />
      }
    </>
  )
}
