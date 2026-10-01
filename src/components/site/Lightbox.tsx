import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/content";

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex(((index ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex(((index ?? 0) - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, items.length, onClose, onIndex]);

  if (!open || index === null) return null;
  const item = items[index];
  const btn = "grid h-12 w-12 place-items-center border border-ivory/25 text-ivory transition-colors hover:border-gold hover:text-gold";

  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-[60] flex flex-col bg-navy/97 animate-in fade-in duration-300" onClick={onClose}>
      <div className="container-lux flex items-center justify-between py-5" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs tracking-[0.3em] uppercase text-ivory/60">{index + 1} / {items.length}</p>
        <button onClick={onClose} className={btn} aria-label="Close"><X className="h-5 w-5" strokeWidth={1.3} /></button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-24" onClick={(e) => e.stopPropagation()}>
        <img key={item.src} src={item.src} alt={item.title} className="max-h-[72vh] w-auto max-w-full object-contain animate-in fade-in zoom-in-95 duration-500" />
        <button onClick={() => onIndex((index - 1 + items.length) % items.length)} className={`${btn} absolute left-4 top-1/2 -translate-y-1/2 md:left-8`} aria-label="Previous image">
          <ChevronLeft className="h-5 w-5" strokeWidth={1.3} />
        </button>
        <button onClick={() => onIndex((index + 1) % items.length)} className={`${btn} absolute right-4 top-1/2 -translate-y-1/2 md:right-8`} aria-label="Next image">
          <ChevronRight className="h-5 w-5" strokeWidth={1.3} />
        </button>
      </div>
      <div className="pb-10 text-center" onClick={(e) => e.stopPropagation()}>
        <p className="eyebrow">{item.category}</p>
        <p className="mt-2 font-display text-3xl text-ivory">{item.title}</p>
      </div>
    </div>
  );
}
