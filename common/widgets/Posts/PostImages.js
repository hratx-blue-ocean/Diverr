import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Typography, Paper, MobileStepper } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: 450,
    overflow: "hidden",
    display: "block",
    width: "100%",
    objectFit: "cover",
  },
}));

{
  /* <img
className={classes.img}
src={photos[activeStep].url}
alt={photos[activeStep].id}
/>

<Image
  src={photos[activeStep].url}
  alt={photos[activeStep].id}
  width={500}
  height={500}
/>
*/
}

export default function PostImages({ photos }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = photos.length;
  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(maxSteps - 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  if (photos.length === 0) {
    photos.push({
      id: 1,
      url: "https://images.unsplash.com/photo-1589634749362-a8ef3056cbe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2775&q=80",
      id_log: 1,
    });
  }

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={photos[activeStep].url}
        alt={photos[activeStep].id}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
