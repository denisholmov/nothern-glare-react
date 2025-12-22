import { Carousel } from "@mantine/carousel";
import { Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

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
  const theme = useMantineTheme();
  const [slidesToShow, setSlidesToShow] = useState(1);

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  useEffect(() => {
    if (isMobile) {
      setSlidesToShow(1);
    } else if (isTablet) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [isMobile, isTablet, isDesktop]);

  const showControls = images.length > slidesToShow;

  return (
    <Carousel
      withControls={showControls}
      slideGap="lg"
      slideSize={{ base: "100%", sm: "50%", md: `${100 / slidesToShow}%` }}
      emblaOptions={{
        loop,
        align: "start",
        containScroll: "trimSnaps",
      }}
      nextControlIcon={<RightArrow size={29} />}
      previousControlIcon={<LeftArrow size={29} />}
      classNames={{
        control: styles.control,
      }}
      styles={{
        viewport: {
          overflow: "visible",
        },
        container: {
          gap: "var(--mantine-spacing-lg)",
        },
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
