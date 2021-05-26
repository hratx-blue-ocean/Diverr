import Head from "next/head";
import Image from "next/image";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useSession } from "next-auth/client";
import UserDashboard from "common/layouts/UserDashboardLayout.js";
import Header from "common/widgets/Header";

export default function Dashboard(props) {
  return (
    <main>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <Header />
      <UserDashboard />
    </main>
  );
}

// getServerSideProps to get email

// {!session && <Dashboard selection={"noUser"} />}
// {session && <Dashboard selection={"user"} email={session.user.email} />}
// {session && loading && <Dashboard selection={"loading"} />}
