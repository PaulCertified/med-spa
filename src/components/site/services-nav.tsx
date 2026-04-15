"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const items = [
  { href: "#services", label: "All treatments" },
  { href: "#services", label: "Injectables" },
  { href: "#services", label: "Facials & skin" },
  { href: "#services", label: "Body & contour" },
];

export function ServicesNavItem() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 text-white transition hover:border-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={openMenu}
        onBlur={scheduleClose}
      >
        Services
        <Chevron
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 pt-3"
          role="menu"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="min-w-[200px] rounded-sm border border-white/15 bg-[#1a1a1a]/92 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                role="menuitem"
                className="block px-4 py-2.5 text-[10px] tracking-[0.14em] text-white/90 transition hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
