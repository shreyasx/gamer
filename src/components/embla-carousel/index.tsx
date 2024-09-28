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
  const [isHovering, setIsHovering] = useState(false);
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
      setAutoplay(AutoplayPlugin({ delay: 2000, stopOnInteraction: false }));
  }, [autoplay]);

  const stopAutoplay = useCallback(() => {
    if (autoplay && emblaApi) {
      emblaApi.plugins().autoplay?.stop();
      setAutoplay(undefined);
    }
  }, [autoplay, emblaApi]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
    startAutoplay();
  }, [startAutoplay]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    stopAutoplay();
  }, [stopAutoplay]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseEnter, handleMouseLeave]);

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
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((str, index) => (
            <div className="embla__slide flex justify-center" key={index}>
              <div className="aspect-video relative embla__slide__number max-w-full">
                {slides.length > 1 ? (
                  <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-250 ${isHovering ? "opacity-0" : "opacity-100"}`}
                  >
                    <Image
                      src="/hf.png"
                      alt="Hover over contributions"
                      width={712}
                      height={42}
                    />
                  </div>
                ) : null}
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
