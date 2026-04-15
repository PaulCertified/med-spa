import { FadeIn } from "./fade-in";

const brands = [
  "Botox Cosmetic",
  "Juvéderm",
  "Restylane",
  "SkinMedica",
  "Alastin",
  "ZO Skin Health",
];

export function Brands() {
  return (
    <section id="gallery" className="bg-[#f7f7f6] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl tracking-tight text-[#2b2b2b] sm:text-4xl">
            Brands we trust
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-neutral-600">
            We source FDA-cleared products from established manufacturers and
            store them under manufacturer guidelines.
          </p>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-px border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
          {brands.map((name, index) => (
            <FadeIn
              key={name}
              delay={index * 0.04}
              className="flex min-h-[88px] items-center justify-center bg-white px-4 py-6"
            >
              <span className="text-center font-serif text-sm font-medium tracking-wide text-[#2b2b2b]">
                {name}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
