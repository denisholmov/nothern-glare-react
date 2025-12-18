import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import type { ImageCarouselProps } from "./types";

import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import styles from "./styles/index.module.css";

export const ImageCarousel = ({
  images,
  height = 300,
  width = 300,
  loop = true,
}: ImageCarouselProps) => {
  return (
    <Carousel
      slideGap="lg"
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      emblaOptions={{ loop }}
      nextControlIcon={<RightArrow size={29} />}
      previousControlIcon={<LeftArrow size={29} />}
      classNames={{
        control: styles.control,
      }}
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
