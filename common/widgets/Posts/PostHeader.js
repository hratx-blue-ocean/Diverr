import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, CardHeader } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FeedHeader({ name, location, date }) {
  const classes = useStyles();
  const [firstName, lastName] = name.split(' ')
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
          <Typography>{name}</Typography>
          <Typography>{moment(date).fromNow()}</Typography>
        </Grid>
      }
      subheader={location}
    />
  );
}
