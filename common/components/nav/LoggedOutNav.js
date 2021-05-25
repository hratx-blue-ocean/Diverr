import { signIn } from "next-auth/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import Button from "@material-ui/core/Button";

export default function LoggedOutNav({ classes }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumbs"
      className={classes.menu}
      separator={<span>&middot;</span>}
      data-testid="menu"
    >
      <Button
        startIcon={<AssignmentIndOutlinedIcon className={classes.icon} />}
        onClick={signIn}
      >
        <Typography className={classes.menuItem} data-testid="signIn">
          SIGN IN
        </Typography>
      </Button>
    </Breadcrumbs>
  );
}
