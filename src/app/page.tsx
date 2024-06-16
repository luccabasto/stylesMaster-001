import Image from "next/image";
import styles from "./page.module.css";

import {TwistedPyramid} from '@/app/components/num01';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <h1>Dia #01 - Desafios CSS</h1>
       <div><TwistedPyramid/></div>
      </div>
    </main>
  );
}
