import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

const heroImage = "/medspa-hero.png";
const promoThumb =
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80";

const accent = "#40e0d0";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#1c2820]">
      <Image
        src={heroImage}
        alt="Serene portrait with magnolia blossoms and soft teal background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Atmospheric depth: vignette + readable left column */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end gap-12 px-4 pb-16 pt-[var(--site-header-offset)] sm:px-8 sm:pb-20 md:justify-center md:pb-24 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12 lg:pb-28">
        <FadeIn className="max-w-xl text-white lg:max-w-[34rem]">
          <h1 className="font-serif text-[2.1rem] font-semibold uppercase leading-[1.08] tracking-[0.04em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl md:tracking-[0.05em]">
            Where wellness
            <br />
            meets luxury
          </h1>
          <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-white/95 sm:text-base">
            We believe that true beauty and wellness come from a harmonious
            balance of mind, body, and spirit.
          </p>
          <Link
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition hover:brightness-95"
            style={{ backgroundColor: accent }}
          >
            Book now
            <span aria-hidden className="text-[11px] font-normal">
              &gt;
            </span>
          </Link>
        </FadeIn>

        <FadeIn
          delay={0.12}
          className="flex w-full flex-col items-end self-end lg:w-auto lg:max-w-sm lg:self-center"
        >
          <p className="mb-3 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-left">
            Special for new clients!
          </p>
          <div className="w-full max-w-sm rounded-sm border border-white/45 bg-white/78 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-6">
            <div className="flex gap-4">
              <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10">
                <Image
                  src={promoThumb}
                  alt="Injectable treatment"
                  fill
                  className="object-cover"
                  sizes="104px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-serif text-[1.25rem] font-semibold uppercase leading-snug tracking-[0.04em] text-[#1a1a1a] sm:text-[1.65rem]">
                  20% off all fillers
                </p>
                <p className="mt-2 text-[11px] leading-snug text-neutral-600">
                  Ask at booking. Some exclusions apply.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
