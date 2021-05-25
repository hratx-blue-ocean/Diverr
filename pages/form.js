import React from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "common/widgets/Header";
import Grid from "@material-ui/core/Grid";
import { useSession } from "next-auth/client";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import AddButton from "common/components/buttons/AddButton.js";
import Column1 from "common/widgets/Form/formCol1.js";
import Column2 from "common/widgets/Form/formCol2.js";
import Column3 from "common/widgets/Form/formCol3.js";
import Column4 from "common/widgets/Form/formCol4.js";

const useStyles = makeStyles((theme) => ({
  col: {
    display: "inline-flex",
    flexDirection: "column",
    marginLeft: 50,
  },
}));

export default function AddNewLogForm() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <form>
        <Grid container spacing={3} direction="row">
          <Column1 />
          <Column2 />
          <Column3 />
          <Column4 />
          <div className={classes.col}>
            <h1>Placeholder for tags</h1>
            <AddButton text={"Add Photos or Videos"} />
            <AddButton text={"Submit New Log"} />
          </div>
        </Grid>
      </form>
    </>
  );
}
