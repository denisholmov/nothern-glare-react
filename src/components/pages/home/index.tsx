import { Header } from "./components/Header";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>123</main>
    </div>
  );
};
