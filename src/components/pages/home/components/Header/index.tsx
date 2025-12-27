import { useState, type FC } from "react";

import { CallModal } from "@/components/features/components/CallModal";

import styles from "./styles/index.module.css";

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Северный блик</h1>
        {/* shdzhdshsah */}
        <div className={styles.information}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.itemSteel}`}>
              Работаем с 9:00 до 22:00
            </li>
            <li className={styles.item}>+7 (999) 581-98-22</li>
            <li className={styles.item}>severnyblik@gmail.com</li>
          </ul>

          <button
            className={styles.btn}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Отправить заявку
          </button>

          <CallModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};
