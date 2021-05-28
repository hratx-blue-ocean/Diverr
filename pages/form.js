import { React, useState, useEffect } from "react";
import ThemeWrapper from "styles/Theme";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Header from "common/widgets/Header";
import { getSession, useSession } from "next-auth/client";
import AddButton from "common/components/buttons/AddButton.js";
import Column1 from "common/widgets/Form/formCol1.js";
import Column2 from "common/widgets/Form/formCol2.js";
import Column3 from "common/widgets/Form/formCol3.js";
import Column4 from "common/widgets/Form/formCol4.js";
import FormTags from "common/widgets/Form/tags.js";
import FormMedia from "common/widgets/Form/photos.js";
import { useFormik } from "formik";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  col: {
    width: "100%",
    marginLeft: 50,
  },
  textfield: {
    margin: 5,
    border: '#2196f3'
  },
  submit: {
    height: 56,
    width: '25%',
    marginTop: 50,
    marginBottom: 10
  },
  root: {
    color: '#2196f3'
  }
}));

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  if (!session) {
    res.writeHead(302, { Location: '/' })
    res.end()
    return {
      props: {}
    }
  }
  if (session) {
    console.log('Session is: ', session)
    const timeAndId = await axios.get(`${process.env.NEXTAUTH_URL}/api/user/${session.user.email}/cumulative`);
    console.log(session.user.email)
    // console.log({timeAndId})
    console.log('Time and ID is: ', timeAndId.data)
    return {
      props: {
        email: session.user.email,
        cumulative_time: Number(timeAndId.data.sum),
        userId: timeAndId.data.id
        // userId: null
      },
    };
  }
}


export default function AddNewLogForm({ email, cumulative_time, userId }) {
  // console.log({cumulative_time})
  // console.log({email})
  // console.log({userId})
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const formik = useFormik({
    initialValues: {
      date: "",
      city: "",
      country: "",
      site: "",
      center: "",
      instructor: "",
      instructorCert: "",
      timeIn: "",
      timeOut: "",
      startPressure: "",
      endPressure: "",
      depth: "",
      abt: "",
      rnt: "",
      tbt: "",
      visibility: "",
      airTemp: "",
      waterTemp: "",
      weight: "",
      notes: "",
    },
    onSubmit: (values) => {
      values.tags = tags;
      values.images = images;
      values.userId = userId;

      //determines privacy
      if (values.privacy === 'public') {
        values.public = true;
      }
      delete values.privacy;

      //thermal insulation
      if (values.suitUp === 'wetsuit') {
        values.wet_suit = true;
      }
      delete values.suitUp;

      //environment
      if (values.environment === 'controlled') {
        values.controlled_env = true;
      } else {
        if (values.environment === 'boat') {
          values.boat = true;
        }
      }
      delete values.environment;

      //fresh v salt
      if (values.water === 'salt') {
        values.salt_water = true;
      }
      delete values.water;

      //checkboxes
      if (values.checked) {
        for (let item of values.checked) {
          values[item] = true;
        }
      }

      //times
      values.abt = Number(values.abt);
      values.rnt = Number(values.rnt);
      values.tbt = Number(values.tbt);
      values.cumulative_time = cumulative_time + values.abt;

      // console.log({ values })
      alert(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2));

      let host = process.env.NEXTAUTH_URL

      axios.post(`${host}/api/user/${email}/add/log`, values)
      .then(result => console.log('Post successful'))
      .catch(err => console.log('Error adding form'))
    }
  });

  return (
    <>
      <Header />
      <form className={classes.root}>
        <Grid  container justify="center" alignItems="center" spacing={1} direction="row">
          <Grid  item xs={3}>
            <Column1 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column2 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column3 formik={formik} />
          </Grid>
          <Grid item xs={3}>
            <Column4 formik={formik} />
          </Grid>
          <Grid className={classes.col} container spacing={3}>
            <FormTags tags={tags} setTags={setTags} />
            <FormMedia images={images} setImages={setImages} />
          </Grid>
          <Grid justify="center" container spacing={3}>
            <Button className={classes.submit} onClick={formik.handleSubmit} color="primary" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

