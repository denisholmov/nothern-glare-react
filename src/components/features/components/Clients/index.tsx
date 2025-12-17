import { ImageCarousel } from "@/components/ui/ImageCarousel";

import { CLIENTS_IMAGES } from "./constants";

export const Clients = () => {
  return <ImageCarousel images={CLIENTS_IMAGES} height={300} />;
};
