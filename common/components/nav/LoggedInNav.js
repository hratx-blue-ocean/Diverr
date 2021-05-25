import { signOut } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";
import AddSharpIcon from "@material-ui/icons/AddSharp";

export default function LoggedInNav({ classes }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
      data-testId="menu"
    >
      <Button
        startIcon={
          <OpacityOutlinedIcon className={classes.icon} href="/feed" />
        }
      >
        <Link className={classes.menuItem} data-testId="feed" href="/feed">
          Feed
        </Link>
      </Button>
      <Button
        startIcon={<DescriptionOutlinedIcon className={classes.icon} />}
        href="/dashboard"
      >
        <Link className={classes.menuItem} data-testId="logs" href="/dashboard">
          View Logs
        </Link>
      </Button>
      <Button
        startIcon={<AddSharpIcon className={classes.icon} href="/form" />}
      >
        <Link className={classes.menuItem} data-testId="form" href="/form">
          Create Log
        </Link>
      </Button>
      <Button
        startIcon={<ExitToAppOutlinedIcon className={classes.icon} />}
        onClick={signOut}
      >
        <Link
          onClick={signOut}
          className={classes.menuItem}
          data-testId="signOut"
        >
          SIGN OUT
        </Link>
      </Button>
    </Breadcrumbs>
  );
}
