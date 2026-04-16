import Link from "next/link";

const menu = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
];

const quick = [
  { href: "#contact", label: "Book" },
  { href: "#", label: "Privacy policy" },
  { href: "#contact", label: "Contact us" },
];

export function Footer() {
  return (
    <footer id="contact" className="w-full min-w-0 overflow-x-clip bg-black text-neutral-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-4 lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <p className="font-serif text-2xl text-white">Goat Spa</p>
          <p className="mt-4 text-sm leading-relaxed">
            1200 Wellness Way
            <br />
            Suite 400
            <br />
            Austin, TX 78701
          </p>
          <a
            href="tel:+15555551234"
            className="mt-4 inline-flex w-fit max-w-full items-center gap-2 rounded-sm border border-white/15 bg-black px-3 py-2 text-sm text-white shadow-sm ring-1 ring-white/10 transition hover:bg-neutral-900"
          >
            <PhoneGlyph className="h-4 w-4 shrink-0 opacity-90" />
            <span className="truncate">(555) 555-1234</span>
          </a>
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Menu
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {menu.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#58d2d7]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#58d2d7]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="blog" className="min-w-0 max-w-full">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Subscribe to our newsletter
          </p>
          {/*
            Always stack: the 4-column footer leaves this cell ~25% of the viewport,
            which is too narrow for input + button in one row without clipping.
          */}
          <form
            className="mt-4 flex w-full max-w-full min-w-0 flex-col gap-3"
            action="#"
            method="post"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="box-border min-h-[52px] w-full max-w-full min-w-0 rounded-md border border-white/25 bg-black/40 px-4 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-[#58d2d7] focus:outline-none focus:ring-1 focus:ring-[#58d2d7]/40"
            />
            <button
              type="submit"
              className="box-border min-h-[52px] w-full max-w-full rounded-md bg-[#58d2d7] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-[#4ec3c8]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 text-xs text-neutral-500 sm:flex-row sm:items-start sm:gap-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="flex w-full min-w-0 max-w-full flex-col gap-2 text-center sm:w-auto sm:text-left">
            <p className="break-words">
              © {new Date().getFullYear()} Goat Spa. All rights reserved.
            </p>
            <p className="text-[11px] text-neutral-500">
              Designed by{" "}
              <a
                href="https://fullstackgoat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block break-words text-neutral-400 underline-offset-2 transition hover:text-[#58d2d7] hover:underline"
              >
                Full Stack Goat LLC
              </a>
            </p>
          </div>
          <div className="flex shrink-0 items-center justify-center gap-4 sm:justify-end">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#58d2d7]"
              aria-label="Facebook"
            >
              <SocialFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#58d2d7]"
              aria-label="Instagram"
            >
              <SocialInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-[#58d2d7]"
              aria-label="LinkedIn"
            >
              <SocialLinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8.2h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3.2h2.8V22h3.2z" />
    </svg>
  );
}

function SocialInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.25-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
    </svg>
  );
}

function SocialLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 6.5a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM3 20.5h7v-12H3v12zm9 0h7v-6.8c0-3.4-3.6-3.6-4.6 0V20.5H12v-12h3.3v1.7c1.4-2.6 6.2-2.8 6.2 2.5V20.5z" />
    </svg>
  );
}
