import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Biv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <footer className={styles.footer}></footer>
    </div>
  )
}
