import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import type { ImageCarouselProps } from "./types";

export const ImageCarousel = ({
  images,
  height = 300,
  width = 300,
  withIndicators = true,
  loop = true,
}: ImageCarouselProps) => {
  return (
    <Carousel
      height={height}
      slideSize={`${width}px`} // slideSize должен быть здесь, у Carousel
      slideGap="md"
      withIndicators={withIndicators}
      emblaOptions={{ loop }}
    >
      {images.map((src, index) => (
        <Carousel.Slide key={index}>
          <Image
            src={src}
            height={height}
            width={width}
            fit="contain"
            alt={`Image ${index + 1}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
