import { useEffect, useRef } from "react";

import type { CallModalUIProps } from "./types";

import styles from "./styles/index.module.css";

export const CallModalUI = ({
  onSubmit,
  onClose,
  isLoading,
}: CallModalUIProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.callModalOverlay}>
      <div className={styles.callModal} ref={modalRef}>
        <h2 className={styles.callModalTitle}>
          Здравствуйте!
          <br />
          Оставьте номер, и мы вам перезвоним!
        </h2>

        <form onSubmit={onSubmit}>
          <input
            className={styles.callModalInput}
            name="name"
            placeholder="Имя"
            type="text"
          />
          <input
            className={styles.callModalInput}
            name="phone"
            placeholder="+7(999)123-45-67"
            type="tel"
            required
          />
          <label className={styles.callModalPolicy}>
            <input type="checkbox" name="policy" defaultChecked required />
            <span>
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных
            </span>
          </label>
          <button
            type="submit"
            className={styles.callModalButton}
            disabled={isLoading}
          >
            {isLoading ? "Отправка..." : "Позвоните мне"}
          </button>
        </form>
      </div>
    </div>
  );
};
