import { signIn } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import Button from "@material-ui/core/Button";

export default function LoggedOutNav({ classes }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
    >
      <Button
        startIcon={<AssignmentIndOutlinedIcon className={classes.icon} />}
      >
        <Link onClick={signIn} className={classes.menuItem}>
          SIGN IN
        </Link>
      </Button>
    </Breadcrumbs>
  );
}
