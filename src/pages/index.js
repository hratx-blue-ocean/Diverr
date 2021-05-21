import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from 'common/components/buttons/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caspian</title>
        <meta name="home" content="caspian-holder" />
      </Head>
    <Button />
    </div>
  )
}
