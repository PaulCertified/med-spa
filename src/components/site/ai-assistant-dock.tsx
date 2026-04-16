"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export function AIAssistantDock() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="fixed bottom-5 left-4 right-4 z-[60] flex flex-col items-end gap-3 sm:left-auto sm:right-5 sm:w-[min(380px,calc(100%-2rem))]">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            id="ai-consultant-panel"
            className="w-full max-w-[380px] rounded-sm border border-neutral-200 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
            role="dialog"
            aria-label="Beauty consultant"
          >
            <div className="border-b border-neutral-100 px-4 py-3">
              <p className="text-sm font-semibold text-[#2b2b2b]">
                Beauty consultant
              </p>
              <p className="text-xs text-neutral-500">
                Chat with us about treatments and booking—coming soon.
              </p>
            </div>
            <div className="max-h-[280px] space-y-3 overflow-y-auto px-4 py-4 text-sm text-neutral-600">
              <p>
                We are preparing a guided assistant to answer common questions
                about services and scheduling. Check back shortly, or call the
                number in the header for immediate help.
              </p>
            </div>
            <div className="border-t border-neutral-100 px-4 py-3">
              <label htmlFor="ai-input" className="sr-only">
                Message
              </label>
              <div className="flex gap-2">
                <input
                  id="ai-input"
                  type="text"
                  disabled
                  placeholder="Available soon"
                  className="min-w-0 flex-1 rounded-sm border border-neutral-200 px-3 py-2 text-sm text-neutral-400"
                />
                <button
                  type="button"
                  disabled
                  className="rounded-sm bg-[#58d2d7] px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#1a1a1a] opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition hover:bg-black"
        aria-expanded={open}
        aria-controls="ai-consultant-panel"
      >
        <span className="sr-only">Toggle beauty consultant</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden
        >
          <path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M3 12h3M18 12h3M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </button>
    </div>
  );
}
