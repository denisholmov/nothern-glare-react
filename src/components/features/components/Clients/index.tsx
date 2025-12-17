import { ImageCarousel } from "@/components/ui/ImageCarousel";

import { CLIENTS_IMAGES } from "./constants";
import styles from "./styles/index.module.css";

export const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.container}>
        <h2 className={styles.title}>Среди наших клиентов</h2>
        <div className={styles.slider}>
          <ImageCarousel images={CLIENTS_IMAGES} height={300} />
        </div>
      </div>
    </div>
  );
};
