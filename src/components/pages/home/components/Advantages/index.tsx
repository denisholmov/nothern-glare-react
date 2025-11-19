import type { FC } from "react";

import { advantagesList } from "./constants/index";
import styles from "./styles/index.module.css";

export const Advantages: FC = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <ul className={styles.list}>
          {advantagesList.map((item) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.image}>
                <item.image />
              </div>
              <div className={styles.content}>
                <h3 className={styles.contentTitle}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
