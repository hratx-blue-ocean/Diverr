import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from 'next'
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useSession } from "next-auth/client";
import UserDashboard from "common/layouts/UserDashboardLayout.js";
import Header from "common/widgets/Header";
import { getSession } from "next-auth/client";
import axios from 'axios';

export default function Dashboard({session, userTags, userLogs}) {
  return (
    <main>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Header />
      <UserDashboard session={session} userTags={userTags} userLogs={userLogs[0].logs}/>
    </main>
  );
}

// getServerSideProps to get email
export async function getServerSideProps(context) {
  const { req, res } = context;
  const session = await getSession({ req });

  // Redirect user if visiting signIn page while signed in
  if (!session) {
    res.writeHead(302, {
      Location: "/signin",
    });
    res.end();
    return { props: {} };
  }
  const email = session.user.email;
  const resultUserTags = await axios.get(`http://localhost:3000/api/user/19ccrow99@gmail.com/tags`); // REPLACE EMAIL WITH ${email} IN THE FUTURE
  if (!resultUserTags.data) {
    return {
      props: {notFound: true}
    }
  }
  const resultUserLogs =  await axios.get(`http://localhost:3000/api/user/19ccrow99@gmail.com/logs`);// REPLACE EMAIL WITH ${email} IN THE FUTURE
  if (!resultUserLogs.data) {
    return {
      notFound: true,
    }
  }
  const result = {
    props: {session: session, userTags: resultUserTags.data, userLogs: resultUserLogs.data}
  }
  console.log('RESULT: ', result);
  return result;
  // return {
  //   props: {
  //     session: null,
  //     providers: (await providers(context)) || {},
  //   },
  // };
}
// {!session && <Dashboard selection={"noUser"} />}
// {session && <Dashboard selection={"user"} email={session.user.email} />}
// {session && loading && <Dashboard selection={"loading"} />}
