import type { FC } from "react";

import styles from "./styles/index.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Северный блик</h1>

        <div className={styles.information}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.itemSteel}`}>
              Работаем с 9:00 до 22:00
            </li>
            <li className={styles.item}>+7 (999) 581-98-22</li>
            <li className={styles.item}>severnyblik@mail.ru</li>
          </ul>

          <button className={styles.btn}>Расчитать стоимость</button>
        </div>
      </div>
    </header>
  );
};
