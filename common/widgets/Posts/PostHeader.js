import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, CardHeader } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FeedHeader({ firstName, lastName, location, date }) {
  const classes = useStyles();
  return (
    <CardHeader
      avatar={
        <Avatar
          className={classes.avatar}
        >{`${firstName[0]} ${lastName[0]}`}</Avatar>
      }
      title={
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography>{`${firstName} ${lastName}`}</Typography>
          <Typography>{moment(date).fromNow()}</Typography>
        </Grid>
      }
      subheader={location}
    />
  );
}
