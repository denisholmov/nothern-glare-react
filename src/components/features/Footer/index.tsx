import styles from "./styles/index.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.title}>Северный блик</h3>

          <div className={styles.contacts}>
            <span>+7 (999) 581-98-22</span>
            {/* <span>severnyblik@mail.ru</span> */}
          </div>

          <div className={styles.meta}>
            {/* <p>© ООО «Северный блик» 2025</p>{" "} */}
            {/* <p>ИНН 9999999999, ОГРН 9999999999999</p> */}
            {/* <p>197101, город Санкт-Петербург, ул. Мира д. 3</p> */}
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.socialTitle}>Мы в соц.сетях</p>

          <div className={styles.socials}>
            <a
              href="https://t.me/vladislav_ov_v"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className={styles.icon}
            >
              TG
            </a>

            <a
              href="https://vk.com/ghostvood"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
              className={styles.icon}
            >
              VK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
