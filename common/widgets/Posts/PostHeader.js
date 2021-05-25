import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FeedHeader({ userName, location }) {
  const classes = useStyles();
  return (
    <CardHeader
      avatar={
        <Avatar className={classes.avatar}>
          JJ
        </Avatar>
      }
      title={userName}
      subheader={location}
    />
  );
}
