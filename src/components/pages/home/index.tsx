import { Header } from "./components/Header";
import { Services } from "./components/Services";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Services />
      </main>
    </div>
  );
};
