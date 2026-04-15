import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./fade-in";

/** Misty blue-grey — matches reference “Our Services” section */
const sectionBg = "#e8f1f2";

const items = [
  {
    tag: "Injectables",
    title: "Neuromodulators and fillers",
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Facials",
    title: "Clinical facials and peels",
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Skin",
    title: "Texture, pigment, and tone",
    src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Body",
    title: "Contour and tightening",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <FadeIn>
          <p className="text-[11px] font-normal uppercase tracking-[0.28em] text-neutral-500">
            Our services
          </p>
          <h2 className="mt-3 max-w-4xl font-serif text-3xl font-bold uppercase leading-[1.12] tracking-[0.02em] text-black sm:text-4xl md:text-[2.35rem] md:leading-tight">
            Enhance your well-being and beauty
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Browse our core offerings. During your visit we tailor protocols to
            your goals, skin type, and schedule.
          </p>
        </FadeIn>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FadeIn key={item.tag} delay={index * 0.06}>
              <Link
                href="#contact"
                className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-0.5 bg-black px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                  {item.tag}
                  <span aria-hidden className="text-[9px] font-normal">
                    &gt;
                  </span>
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-lg text-white">{item.title}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
