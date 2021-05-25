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
      data-testId="menu"
    >
      <Button
        startIcon={<AssignmentIndOutlinedIcon className={classes.icon} />}
        onClick={signIn}
      >
        <Link
          onClick={signIn}
          className={classes.menuItem}
          data-testId="signIn"
        >
          SIGN IN
        </Link>
      </Button>
    </Breadcrumbs>
  );
}
