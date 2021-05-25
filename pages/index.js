import Head from "next/head";
import Image from "next/image";
import AddButton from "common/components/buttons/AddButton";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { useSession } from "next-auth/client";
import Dashboard from "/common/layouts/Dashboard";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
});

export default function Home(props) {
  const classes = useStyles();
  const [session, loading] = useSession();
  return (
    <main>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
      <div className={classes.root}>
        {!session && <Dashboard selection={"noUser"} />}
        {session && <Dashboard selection={"user"} email={session.user.email} />}
        {session && loading && <Dashboard selection={"loading"} />}
      </div>
    </main>
  );
}
// export async function getServerSideProps(context) {
//   const resTags = await fetch(`route-for-user-tags`)
//   const tagsData = await resTags.json()
//   const resLogs = await fetch(`route-for-user-logs`)
//   const logsData = await resLogs.json()
//   if (!tagsData || !logsData) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {tagsData: tagsData, logsData: logsData},
//   }
// }
