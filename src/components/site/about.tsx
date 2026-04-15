import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { PlanningVisitCard } from "./planning-visit-card";

const treatmentImage = "/about-treatment.png";

export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-8">
        {/* Mobile / tablet: stacked */}
        <div className="flex flex-col gap-10 lg:hidden">
          <FadeIn>
            <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-neutral-400">
              About us
            </p>
            <h2 className="mt-3 font-serif text-[2.15rem] font-bold leading-[1.08] tracking-tight text-black sm:text-5xl">
              Rediscover your
              <br />
              best self
            </h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src={treatmentImage}
                alt="Facial treatment with magnifying lamp in a bright med spa suite"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h3 className="text-[15px] font-bold tracking-tight text-black">
              At Goat Spa
            </h3>
            <AboutBody className="mt-5" />
            <ExploreCta className="mt-8" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <PlanningVisitCard />
          </FadeIn>
        </div>

        {/* Desktop: grid — row 1 eyebrows | row 2 three columns with shared height */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:items-stretch lg:gap-x-14 lg:gap-y-7 xl:gap-x-16">
          <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-neutral-400 lg:col-start-1 lg:row-start-1 lg:self-start">
            About us
          </p>
          <div
            className="lg:col-start-2 lg:row-start-1"
            aria-hidden
          />
          <h3 className="text-[15px] font-bold tracking-tight text-black lg:col-start-3 lg:row-start-1 lg:self-start">
            At Goat Spa
          </h3>

          <div className="lg:col-start-1 lg:row-start-2 flex h-full min-h-0 flex-col justify-between gap-10">
            <h2 className="max-w-[14ch] font-serif text-[2.65rem] font-bold leading-[1.06] tracking-tight text-black xl:text-[2.85rem]">
              Rediscover your
              <br />
              best self
            </h2>
            <PlanningVisitCard />
          </div>

          <div className="flex h-full min-h-0 w-full flex-col justify-end lg:col-start-2 lg:row-start-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src={treatmentImage}
                alt="Facial treatment with magnifying lamp in a bright med spa suite"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>

          <div className="flex h-full min-h-0 flex-col justify-between lg:col-start-3 lg:row-start-2">
            <AboutBody className="pt-1" />
            <ExploreCta className="self-start" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBody({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-[15px] font-normal leading-[1.85] text-neutral-600 ${className}`}
    >
      we are dedicated to providing a sanctuary where our clients can escape the
      stresses of everyday life and rejuvenate their mind, body, and spirit.
      Located in the heart of Encino, our facility combines the tranquility of a
      spa with the advanced treatments of a med spa, offering a comprehensive
      range of services to cater to your every wellness and beauty need.
    </p>
  );
}

function ExploreCta({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#services"
      className={`inline-flex items-center gap-2 bg-[#40e0d0] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-black shadow-sm transition hover:brightness-[0.97] ${className}`}
    >
      Explore more
      <span aria-hidden className="text-[11px] font-normal">
        &gt;
      </span>
    </Link>
  );
}
