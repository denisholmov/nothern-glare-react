import { useState } from "react";

import { CallbackModal } from "@/components/features/components/CallbackModal";

import { Advantages } from "./components/Advantages";
import { Header } from "./components/Header";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import styles from "./styles/index.module.css";

export const HomePage = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Header onOpenModal={() => setModalOpened(true)} />
      <CallbackModal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      />

      <main className={styles.main}>
        <Services />
        <Process />
        <Advantages />
      </main>
    </div>
  );
};
