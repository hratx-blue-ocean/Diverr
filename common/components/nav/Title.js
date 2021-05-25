import Typography from "@material-ui/core/Typography";

export default function Title({ classes }) {
  return (
    <Typography
      variant="h3"
      color="primary"
      align="center"
      display="inline"
      className={classes.title}
    >
      diverr
    </Typography>
  );
}
