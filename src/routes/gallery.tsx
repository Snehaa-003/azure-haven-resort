import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { Expand } from "lucide-react";
import { gallery, images } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/Blocks";
import { Lightbox } from "@/components/site/Lightbox";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Azure Haven Goa" },
      { name: "description", content: "Images of Azure Haven: ocean views, guest rooms, the pool, restaurant, spa, beach and Goan sunsets." },
      { property: "og:title", content: "Gallery — Azure Haven Goa" },
      { property: "og:description", content: "A visual journey through our coastal boutique resort in Goa." },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState<number | null>(null);
  const items = useMemo(() => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)), [filter]);
  const close = useCallback(() => setIndex(null), []);

  return (
    <>
      <PageHero image={images.sunset} eyebrow="Gallery" title="Moments by the sea">
        From first light on the shore to candlelit evenings — a glimpse of life at Azure Haven.
      </PageHero>

      <section className="container-lux py-24 md:py-32">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter gallery">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase transition-colors ${
                filter === c ? "bg-navy text-ivory" : "border text-navy hover:border-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <Reveal key={g.src + filter} delay={(i % 3) * 80} className="mb-4 break-inside-avoid">
              <button onClick={() => setIndex(i)} className="img-zoom group relative block w-full text-left" aria-label={`View ${g.title}`}>
                <img src={g.src} alt={g.title} loading="lazy" className="w-full object-cover" />
                <div className="absolute inset-0 flex items-end justify-between bg-navy/0 p-6 opacity-0 transition-all duration-500 group-hover:bg-navy/45 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <div>
                    <p className="eyebrow">{g.category}</p>
                    <p className="mt-1 font-display text-2xl text-ivory">{g.title}</p>
                  </div>
                  <Expand className="h-5 w-5 text-ivory" strokeWidth={1.3} />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox items={items} index={index} onClose={close} onIndex={setIndex} />
      <CtaBand />
    </>
  );
}
