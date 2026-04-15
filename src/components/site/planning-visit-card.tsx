import Link from "next/link";

export type PlanningVisitCardProps = {
  className?: string;
};

/**
 * Standalone card for the “Planning your visit” callout (text UI, not imagery).
 */
export function PlanningVisitCard({ className = "" }: PlanningVisitCardProps) {
  return (
    <article
      className={`rounded-sm border border-neutral-200/90 bg-[#f4f1e9] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.04)] md:p-7 ${className}`}
    >
      <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-black">
        Planning your visit?
      </h4>
      <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
        First time visit to our Spa? Speed up your check-in so by the time you
        arrive you are ready to relax!
      </p>
      <div className="mt-5 flex justify-end pt-1">
        <Link
          href="#contact"
          className="text-[12px] font-semibold text-black transition hover:text-neutral-700"
        >
          Sign up &gt;
        </Link>
      </div>
    </article>
  );
}
