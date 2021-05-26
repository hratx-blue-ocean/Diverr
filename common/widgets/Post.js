import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import PostHeader from "common/widgets/Posts/PostHeader.js";
import PostImages from "common/widgets/Posts/PostImages.js";
import SmallTagContainer from "common/widgets/SmallTagContainer.js";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post( {log} ) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(log)
  const {first_name, last_name, dive_site, city, country,photos ,tags, date} = log
  return (
    <Card className={classes.root}>
      <PostHeader firstName={first_name} lastName={last_name} location={`${dive_site}`} date={date}/>
      <CardContent>
        <PostImages photos={photos}/>
      </CardContent>
      <CardContent>
        <SmallTagContainer
          tags={tags}
        />
      </CardContent>
    </Card>
  );
}
