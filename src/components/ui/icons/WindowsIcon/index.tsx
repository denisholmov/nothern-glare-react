import type { FC } from "react";

import styles from "../styles/index.module.css";

export const WindowsIcon: FC = () => (
  <svg
    viewBox="0 0 55 55"
    fill="none"
    aria-hidden="true"
    className={styles.logoIcon}
  >
    <path d="M44 7H11V48H44V7Z" stroke="#2096FF" strokeWidth="2" />
    <path d="M29 8H27V48H29V8Z" fill="#2096FF" />
  </svg>
);
