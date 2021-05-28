import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Avatar, CardHeader } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "rgb(33,150,243)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    color: theme.palette.lightBlue.main,
    fontWeight: "bold",
  },
  subtext: {
    color: theme.palette.lightBlue.main,
  }
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
          <Typography className={classes.text}>{name}</Typography>
          <Typography className={classes.text}>{moment(date).fromNow()}</Typography>
        </Grid>
      }
      subheader={<Typography className={classes.subtext}>{location}</Typography>}
      className={classes.header}
    />
  );
}
