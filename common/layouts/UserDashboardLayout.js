import Typography from "@material-ui/core/Typography";

export default function UserDashboardLayout({ email }) {
  return (
    <>
      <Typography variant="h2" color="primary">
        {`Hello, ${email}`}
      </Typography>
    </>
  );
}
