import { signOut } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import Typography from "@material-ui/core/Typography";

export default function LoggedInNav({ classes }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
      data-testid="menu"
    >
      <Button
        startIcon={
          <OpacityOutlinedIcon className={classes.icon} href="/feed" />
        }
      >
        <Typography className={classes.menuItem} data-testid="feed">
          Feed
        </Typography>
      </Button>
      <Button
        startIcon={<DescriptionOutlinedIcon className={classes.icon} />}
        href="/dashboard"
      >
        <Typography className={classes.menuItem} data-testid="logs">
          View Logs
        </Typography>
      </Button>
      <Button
        startIcon={<AddSharpIcon className={classes.icon} />}
        href="/form"
      >
        <Typography className={classes.menuItem} data-testid="form">
          Create Log
        </Typography>
      </Button>
      <Button
        startIcon={<ExitToAppOutlinedIcon className={classes.icon} />}
        onClick={signOut}
      >
        <Typography className={classes.menuItem} data-testid="signOut">
          SIGN OUT
        </Typography>
      </Button>
    </Breadcrumbs>
  );
}
