import { signOut } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import OpacityOutlinedIcon from "@material-ui/icons/OpacityOutlined";

export default function LoggedInNav({ classes }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
    >
      <Button startIcon={<OpacityOutlinedIcon className={classes.icon} />}>
        <Link className={classes.menuItem}>Feed</Link>
      </Button>
      <Button startIcon={<DescriptionOutlinedIcon className={classes.icon} />}>
        <Link className={classes.menuItem}>Your Logs</Link>
      </Button>
      <Button startIcon={<ExitToAppOutlinedIcon className={classes.icon} />}>
        <Link onClick={signOut} className={classes.menuItem}>
          SIGN OUT
        </Link>
      </Button>
    </Breadcrumbs>
  );
}
