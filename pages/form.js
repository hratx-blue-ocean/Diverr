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
  },
  submit: {
    height: 56,
    width: '25%',
    marginTop: 50,
    marginBottom: 10
  }
}));

export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });
  console.log(session.user.email)

  return {
    props: {
      email: session.user.email,
    },
  };
}


export default function AddNewLogForm({ email }) {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState(0);
  const [cumulativeTime, setCumulativeTime] = useState(0)
  const [allTags, setAllTags] = useState([])

  useEffect(() => {
    // const getUserInfo = async (email) => {
    //   const userInfo = await axios.get(`/api/user/${email}`);
    //   setUserId(userInfo.data)
    //   console.log('user:', userInfo.data)
    // }

    const getAllTags = async () => {
      //${process.env.NEXTAUTH_URL}
      const allTags = await axios.get(`http://localhost:3000/api/tags`);
      setAllTags(allTags.data)
    }

    const getCumulativeTime = async (email) => {
      const cumulative_time = await axios.get(`http://localhost:3000/api/user/sunilrgadgil@gmail.com/cumulative`);
      setCumulativeTime(cumulative_time.data)
    }
    // getUserInfo(email)
    getAllTags();
    getCumulativeTime(email);
  }, [])

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

      //determines privacy
      if (values.privacy === 'public') {
        values.public = true;
      }

      //thermal insulation
      if (values.suitUp === 'wetsuit') {
        values.wet_suit = true;
      }

      //environment
      if (values.environment === 'controlled') {
        values.controlled_env = true;
      } else {
        if (values.environment === 'boat') {
          values.boat = true;
        }
      }

      //fresh v salt
      if (values.water === 'salt') {
        values.salt_water = true;
      }

      //checkboxes
      for (let item of values.checked) {
        values[item] = true;
      }

      //times
      values.abt = Number(values.abt);
      values.rnt = Number(values.rnt);
      values.tbt = Number(values.tbt);
      values.cumulative_time = cumulativeTime + values.abt

      console.log({values})
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));

      const tagsToBeAdded = [];
      for (let tag of values.tags) {
        if (!allTags.includes(tag)) {
          tagsToBeAdded.push(tag)
        }
      }

      // const addNewTags = (tagsToBeAdded) => {
        // axios.post(`http://localhost:3000/api/tags`, {tags: tagsToBeAdded})
        // .then(result => console.log('Tags added!'))
        // .catch(err => console.log('Error adding tags'))
      // }

      // addNewTags(tagsToBeAdded);
    },
  });

  return (
    <>
      <Header />
      <form>
        <Grid container justify="center" alignItems="center" spacing={1} direction="row">
          <Grid item xs={3}>
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
            <FormTags tags={tags} setTags={setTags}/>
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

