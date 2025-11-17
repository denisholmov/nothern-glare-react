import type { FC } from "react";

import { ServicesList } from "./components/ServicesList";
import styles from "./styles/index.module.css";

export const Services: FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши услуги</h2>

        <ServicesList />
      </div>
    </section>
  );
};
