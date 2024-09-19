"use client";

import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect } from "react";

import "@/styles/embla.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [Autoplay()],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="embla">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((str, index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <div className="aspect-video relative embla__slide__number max-w-full">
                <Image
                  src={str}
                  alt={`game image ${index + 1}`}
                  fill
                  className="object-cover border-[2px] border-light2 rounded-3xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
