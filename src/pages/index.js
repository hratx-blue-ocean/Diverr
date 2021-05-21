import Head from 'next/head'
import Image from 'next/image'
import AddButton from 'common/components/buttons/AddButton';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
    <AddButton text={"Log Dive"} />
    </div>
  )
}
