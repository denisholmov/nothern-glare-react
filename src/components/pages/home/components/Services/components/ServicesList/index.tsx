import type { FC } from "react";

import { servicesList } from "./constants/index.ts";
import styles from "./styles/index.module.css";

export const ServicesList: FC = () => {
  return (
    <ul className={styles.list}>
      {servicesList.map((item) => {
        return (
          <li key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img src={item.src} alt={item.title} />
            </div>
            <p className={styles.text}>{item.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
