import { ImageCarousel } from "@/components/ui/ImageCarousel";

import { EXAMPLES_IMAGES } from "./constants";
import styles from "./styles/index.module.css";

export const ExampleCleaning = () => {
  return (
    <div className={styles.example}>
      <div className={styles.container}>
        <h2 className={styles.title}>До и после уборки</h2>
        <div className={styles.carousel}>
          <ImageCarousel images={EXAMPLES_IMAGES} height={428} width={321} />
        </div>
      </div>
    </div>
  );
};
