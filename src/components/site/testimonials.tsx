"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

/** Section: very pale neutral off-white */
const sectionBg = "#f5f6f5";
/** Cards: pale mint / blue-grey */
const cardBg = "#e4eeea";

const testimonials = [
  {
    name: "Sarah M.",
    text: "The consultation was thorough and never rushed. I understood exactly what would happen before we started, and the results look like me—just rested.",
  },
  {
    name: "Daniel K.",
    text: "Front desk is organized, rooms are spotless, and follow-up was proactive. I have sent two coworkers here and they had the same experience.",
  },
  {
    name: "Priya R.",
    text: "I appreciate that they recommended fewer units than I expected and explained why. That kind of honesty is why I keep coming back.",
  },
  {
    name: "Michelle T.",
    text: "I was nervous about my first injectable visit. The team walked me through every step, and the space feels private and calm—not clinical in a cold way.",
  },
  {
    name: "James L.",
    text: "Scheduling is straightforward, pricing was explained up front, and I never felt upsold. That consistency matters when you are choosing a med spa long term.",
  },
  {
    name: "Elena V.",
    text: "My skin texture improved after the treatment plan they suggested. They set realistic timelines and checked in afterward, which I did not expect.",
  },
  {
    name: "Rachel N.",
    text: "The facial was tailored to what my skin needed that day, not a one-size routine. I left glowing and with clear aftercare instructions.",
  },
  {
    name: "Marcus H.",
    text: "As someone new to med spa services, I appreciated the conservative approach and clear answers to my questions. I will return for maintenance visits.",
  },
  {
    name: "Olivia P.",
    text: "From booking to checkout, communication was excellent. The results from my series of treatments look natural—friends noticed I looked refreshed.",
  },
  {
    name: "Christina W.",
    text: "I compared several practices in the area and chose Goat Spa for transparency and bedside manner. Six months later, I am still glad I did.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    duration: 25,
  });

  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-neutral-500">
          Testimonials
        </p>
        <h2 className="mt-3 max-w-4xl font-serif text-3xl font-bold uppercase leading-[1.12] tracking-[0.02em] text-black sm:text-4xl md:text-[2.35rem] md:leading-tight">
          What our clients are saying
        </h2>

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex cursor-grab touch-pan-y -ml-6 active:cursor-grabbing">
              {testimonials.map((q) => (
                <div
                  key={q.name}
                  className="min-w-0 shrink-0 grow-0 pl-6 basis-full sm:basis-[calc(50%-0px)] lg:basis-[calc(33.333%-0px)]"
                >
                  <figure
                    className="flex h-full flex-col border border-neutral-200/80 p-7 md:p-8"
                    style={{ backgroundColor: cardBg }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <figcaption className="text-sm font-semibold text-[#1a1a1a]">
                        {q.name}
                      </figcaption>
                      <span
                        className="font-serif text-3xl leading-none text-neutral-400"
                        aria-hidden
                      >
                        &ldquo;
                      </span>
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-[1.75] text-neutral-600">
                      {q.text}
                    </blockquote>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-end gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevDisabled}
              className="flex h-10 w-10 items-center justify-center border border-neutral-800 bg-transparent text-neutral-900 transition hover:bg-neutral-900 hover:text-white disabled:pointer-events-none disabled:opacity-35"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextDisabled}
              className="flex h-10 w-10 items-center justify-center border border-neutral-800 bg-transparent text-neutral-900 transition hover:bg-neutral-900 hover:text-white disabled:pointer-events-none disabled:opacity-35"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
