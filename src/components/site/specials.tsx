import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

const faceImage =
  "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80";

export function Specials() {
  return (
    <section className="relative overflow-hidden bg-[#a8e8eb] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <FadeIn>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1a1a1a]/80">
            New clients promotion
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#1a1a1a] sm:text-4xl">
            Welcome pricing through this season
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="flex-1 rounded-sm border border-white/60 bg-white px-5 py-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2b2b2b]">
                Botox
              </p>
              <p className="mt-2 font-serif text-xl text-[#1a1a1a]">
                $8.99 per unit
              </p>
            </div>
            <div className="flex-1 rounded-sm border border-white/60 bg-white px-5 py-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2b2b2b]">
                Fillers
              </p>
              <p className="mt-2 font-serif text-lg leading-snug text-[#1a1a1a]">
                20% off all fillers at regular price
              </p>
            </div>
          </div>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#1a1a1a] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-black"
          >
            Claim offer
            <span aria-hidden>→</span>
          </Link>
        </FadeIn>
        <FadeIn delay={0.08} className="relative flex justify-center lg:justify-end">
          <div
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm"
            style={{
              clipPath: "polygon(8% 0%, 100% 0%, 100% 92%, 88% 100%, 0% 100%, 0% 12%)",
            }}
          >
            <Image
              src={faceImage}
              alt="Portrait used for seasonal promotion artwork"
              fill
              className="object-cover object-[center_15%]"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="absolute inset-0 bg-[#58d2d7]/25 mix-blend-multiply" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
