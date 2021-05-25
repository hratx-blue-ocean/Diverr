import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Typography,Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FeedHeader({ userName, location }) {
  const classes = useStyles();
  return (
    <CardHeader
      avatar={<Avatar className={classes.avatar}>JJ</Avatar>}
      title={
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography>userName</Typography>
          <Typography>time</Typography>
        </Grid>
      }
      subheader={location}
    >
      tyujjnbg
    </CardHeader>
  );
}
