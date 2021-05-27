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
  text: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRadius: "0 0 10px 10px"
  },
  img: {
    maxHeight: 450,
    overflow: "hidden",
    display: "block",
    width: "100%",
    objectFit: "cover",
  },
}));

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

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={photos[activeStep].url}
        alt={photos[activeStep].id}
      />
      <MobileStepper
        className={classes.text}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button className={classes.text} size="small" onClick={handleNext}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button className={classes.text} size="small" onClick={handleBack}>
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
