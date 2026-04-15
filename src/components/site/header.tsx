"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ServicesNavItem } from "./services-nav";

const nav = [
  { href: "#", label: "Home", component: null as "services" | null },
  { href: "#services", label: "Services", component: "services" as const },
  { href: "#about", label: "About", component: null },
  { href: "#gallery", label: "Gallery", component: null },
  { href: "#contact", label: "Book", component: null },
];

const mobileSub = [
  { href: "#services", label: "All treatments" },
  { href: "#services", label: "Injectables" },
  { href: "#services", label: "Facials & skin" },
  { href: "#services", label: "Body & contour" },
];

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col border-b border-white/10 bg-black/35 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 py-3 sm:gap-3 sm:px-6 sm:py-4 lg:px-12 lg:py-5">
        <a
          href="tel:+19546990689"
          className="justify-self-start inline-flex w-fit max-w-[min(100%,11rem)] shrink-0 items-center gap-1.5 rounded-sm border border-white/15 bg-black px-2 py-2 text-[10px] font-medium leading-tight tracking-wide text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition hover:bg-neutral-900 sm:max-w-none sm:gap-2 sm:px-3 sm:py-2.5 sm:text-[13px]"
        >
          <PhoneGlyph className="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" />
          <span className="truncate">(954) 699-0689</span>
        </a>

        <Link
          href="/"
          className="min-w-0 justify-self-center text-center"
          onClick={closeMenu}
        >
          <span className="block font-serif text-base font-semibold leading-tight tracking-[0.02em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-xl md:text-2xl">
            Goat Spa
          </span>
          <span className="mt-0.5 hidden font-sans text-[8px] font-medium uppercase tracking-[0.28em] text-white/88 sm:block sm:text-[9px] md:text-[10px]">
            Wellness Center &amp; Med Spa
          </span>
        </Link>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-0.5 bg-white px-2 py-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-black shadow-md transition hover:bg-neutral-100 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[10px] sm:tracking-[0.22em]"
            onClick={closeMenu}
          >
            Contact us
            <span aria-hidden className="text-[9px] sm:text-[11px]">
              ›
            </span>
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/25 text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      {/* Desktop nav — stays in the sticky/fixed header bar */}
      <div className="hidden border-b border-white/15 lg:block">
        <nav
          className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:gap-x-9 sm:px-8 lg:gap-x-10 lg:px-12"
          aria-label="Primary"
        >
          {nav.map((item) => {
            if (item.component === "services") {
              return (
                <div
                  key={item.label}
                  className="text-[10px] font-medium uppercase tracking-[0.26em] text-white sm:text-[11px] sm:tracking-[0.28em]"
                >
                  <ServicesNavItem />
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-transparent pb-0.5 text-[10px] font-medium uppercase tracking-[0.26em] text-white transition hover:border-white/80 sm:text-[11px] sm:tracking-[0.28em]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent lg:block" />

      {/* Mobile full-screen nav */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="fixed bottom-0 left-0 right-0 z-[45] flex flex-col bg-black/96 px-4 pb-8 pt-6 lg:hidden"
          style={{ top: "var(--site-header-offset)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto" aria-label="Mobile primary">
            {nav.map((item) => {
              if (item.component === "services") {
                return (
                  <div key={item.label} className="border-b border-white/10 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                      Services
                    </p>
                    <ul className="mt-3 space-y-2 pl-1">
                      {mobileSub.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="block py-2 text-sm text-white/90"
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-white/10 py-3.5 text-[11px] font-medium uppercase tracking-[0.26em] text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="#contact"
            className="mt-4 flex w-full items-center justify-center gap-2 bg-white py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black"
            onClick={closeMenu}
          >
            Contact us ›
          </Link>
        </div>
      )}
    </header>
  );
}
