import MuiButton from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default function Button({ text }) {
  return (
    <MuiButton variant="outlined" endIcon={<AddIcon />}>
      {text}
    </MuiButton>
  );
}