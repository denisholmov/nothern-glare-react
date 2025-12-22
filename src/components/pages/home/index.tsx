import { Clients } from "@/components/features/components/Clients";

import { Advantages } from "./components/Advantages";
import { ExampleCleaning } from "./components/ExampleCleaning";
import { Header } from "./components/Header";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Services />
        <Process />
        <Advantages />
        <Clients />
        <ExampleCleaning />
      </main>
    </div>
  );
};
