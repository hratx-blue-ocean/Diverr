import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function SmallTag({ tagName }) {
  const classes = useStyles();
  return (
    <Chip label={tagName} size="small" className={classes.chip} />
  );
}
