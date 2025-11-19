import type { FC } from "react";

import styles from "./styles/index.module.css";

export const Process: FC = () => {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <div className={styles.imageHome}>
          <img src="/images/bg-process.jpg" alt="Окно" />
        </div>
        <div className={styles.stages}>
          <img src="/images/window.jpg" alt="Как выполняется мойка окон" />
        </div>
      </div>
    </section>
  );
};
