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

export default function Dashboard({session, userData, userLogs}) {
  console.log('Session: ', session, 'User: ',userData, 'Logs: ', userLogs)
  return (
    <main>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Header />
      <UserDashboard session={session} userTags={userData.tags} userLogs={userLogs}/>
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
  console.log(session);
  const email = session.user.email;
  const resultUser = await fetch(`http://localhost:3000//api/user/${email}`)
  const userData = await resultUser.json()

  if (!userData) {
    return {
      notFound: true,
    }
  }
  const resultUserLogs =  await fetch(`http://localhost:3000//api/user/${email}/logs`);
  const userLogs = await resultUserLogs.json();
  if (!userLogs) {
    return {
      notFound: true,
    }
  }
  const result = {
    props: {session: session, userData: userData, userLogs: userLogs}
  }
  console.log(result);
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
