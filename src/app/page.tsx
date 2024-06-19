
import styles from "./page.module.css";

import {TwistedPyramid_sass} from './components/num01';
import { TwistedPyramid_css } from "./components/num01_01";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Challange #01 - Desafios CSS & Sass</h1>
      <div className={styles.description}>
        <div>
          <TwistedPyramid_sass/> 
        </div>
        <div>
          <TwistedPyramid_css/>
        </div>
      </div>
    </main>
  );
}
