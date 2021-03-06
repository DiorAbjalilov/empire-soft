import Head from "next/head";
import styles from "../styles/Home.module.css";
import { View } from "../components/View";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Empire Soft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <View />
    </div>
  );
}
