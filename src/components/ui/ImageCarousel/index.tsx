import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import type { ImageCarouselProps } from "./types";

export const ImageCarousel = ({
  images,
  height,
  withIndicators = true,
  loop = true,
}: ImageCarouselProps) => {
  return (
    <Carousel
      height={height}
      withIndicators={withIndicators}
      emblaOptions={{ loop }}
    >
      {images.map((src, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={src}
            height={height}
            fit="cover"
            alt={`Image ${index + 1}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
