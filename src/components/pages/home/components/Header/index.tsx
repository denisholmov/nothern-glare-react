import styles from "./styles/index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Северный блик</h1>

        <div className={styles.information}>
          <ul className={styles.list}>
            <li>Работаем с 9:00 до 22:00</li>
            <li>+7 (999) 999-99-99</li>
            <li>severnyblik@mail.ru</li>
          </ul>

          <button className={styles.btn}>Расчитать стоимость</button>
        </div>
      </div>
    </header>
  );
};
