"use client";

import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import AutoplayPlugin from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

import "@/styles/embla.css";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [autoplay, setAutoplay] = useState<EmblaPluginType | undefined>(
    undefined,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      ...options,
      containScroll: "trimSnaps",
      dragFree: true,
    },
    [autoplay].filter(Boolean) as EmblaPluginType[],
  );

  const startAutoplay = useCallback(() => {
    if (!autoplay)
      setAutoplay(AutoplayPlugin({ delay: 500, stopOnInteraction: false }));
  }, [autoplay]);

  const stopAutoplay = useCallback(() => {
    if (autoplay && emblaApi) {
      emblaApi.plugins().autoplay?.stop();
      setAutoplay(undefined);
    }
  }, [autoplay, emblaApi]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", startAutoplay);
      container.addEventListener("mouseleave", stopAutoplay);
      return () => {
        container.removeEventListener("mouseenter", startAutoplay);
        container.removeEventListener("mouseleave", stopAutoplay);
      };
    }
  }, [startAutoplay, stopAutoplay]);

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
    <section className="embla relative" ref={containerRef}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <Image
          src="/hf.png"
          alt="Hover over contributions"
          width={712}
          height={42}
        />
      </div>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((str, index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <div className="aspect-video relative embla__slide__number max-w-full">
                <Image
                  src={str}
                  alt={`game image ${index + 1}`}
                  fill
                  className="object-cover"
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
