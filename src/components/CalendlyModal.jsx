import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { CALENDLY } from "../lib/config";
import { CalendarCheck } from "lucide-react";

// Dynamically import InlineWidget
const InlineWidget = dynamic(
  () => import("react-calendly").then(mod => mod.InlineWidget),
  { ssr: false }
);

export default function CalendlyModal({text="Book a Discovery Call", variant = "outline" }) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    primary:
      "group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-3 text-sm font-semibold text-on-brand shadow-glow transition-all duration-300 hover:shadow-glow-cyan hover:brightness-110",
    outline:
      "inline-flex items-center gap-2 rounded-2xl border border-white/15 px-7 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-brand-400 hover:text-white",
    ghost:
      "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-300 hover:text-white hover:bg-ink-700/40 transition-colors",
  };

  const buttonClass = variants[variant] || variants.outline;

  return (
    <div>
      {/* Trigger Button */}
      <button onClick={() => setIsOpen(true)} className={buttonClass}>
        <CalendarCheck className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
        {text}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-brand-400 rounded-lg shadow-lg p-4 w-[90%] max-w-2xl fixed">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute bg-red-600 top-4 right-4 text-white hover:text-black p-2 rounded-full"
            >
              Close ✕
            </button>

            {/* Suspense fallback while Calendly loads */}
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-[700px]">
                  <div className="animate-spin-slow rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-400"></div>
                </div>
              }
            >
              <InlineWidget url={CALENDLY.url} />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
}
