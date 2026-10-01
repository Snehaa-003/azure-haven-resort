import { createFileRoute, Link } from "@tanstack/react-router";
import { Maximize, Users, BedDouble, Check } from "lucide-react";
import { rooms, images } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, RoomCard, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Azure Haven Goa" },
      { name: "description", content: "Ocean View Suites, Garden Villas and the Presidential Suite at Azure Haven, a boutique resort in Goa." },
      { property: "og:title", content: "Rooms & Suites — Azure Haven Goa" },
      { property: "og:description", content: "Explore sea-facing suites, private garden villas and our clifftop Presidential Suite." },
    ],
  }),
  component: RoomsPage,
});

const shared = ["Complimentary high-speed Wi-Fi", "Organic bath amenities", "Airport transfers on request", "24-hour in-room dining", "Nespresso & tea selection", "Daily housekeeping & turndown"];

function RoomsPage() {
  return (
    <>
      <PageHero image={images.pool} eyebrow="Rooms & Suites" title="Spaces shaped by the sea">
        Twenty-two private residences, each one designed around light, stillness and the sound of the ocean.
      </PageHero>

      <section className="container-lux py-28 md:py-36">
        <SectionHeading eyebrow="Choose your stay" title="Three ways to arrive at stillness" />
        <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
          {rooms.map((r, i) => <RoomCard key={r.slug} room={r} delay={i * 120} />)}
        </div>
      </section>

      {rooms.map((r, i) => (
        <section key={r.slug} id={r.slug} className={`scroll-mt-24 ${i % 2 === 0 ? "bg-sand/60" : ""}`}>
          <div className="container-lux grid items-center gap-12 py-24 md:grid-cols-12 md:gap-16 md:py-32">
            <Reveal className={`img-zoom md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={r.image} alt={r.name} loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full object-cover" />
            </Reveal>
            <Reveal delay={150} className="md:col-span-5">
              <p className="eyebrow">0{i + 1} — Residence</p>
              <h2 className="mt-5 text-4xl md:text-5xl">{r.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{r.long}</p>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-y py-6">
                {[
                  { Icon: Maximize, label: "Size", v: r.size },
                  { Icon: Users, label: "Capacity", v: r.guests },
                  { Icon: BedDouble, label: "Bed", v: r.bed },
                ].map(({ Icon, label, v }) => (
                  <div key={label}>
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.2} />
                    <dt className="mt-3 text-[0.66rem] tracking-[0.22em] uppercase text-muted-foreground">{label}</dt>
                    <dd className="mt-1 text-sm text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {r.amenities.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-navy">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> {a}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <p className="font-display text-3xl text-navy">
                  {r.price.split(" / ")[0]}
                  <span className="ml-1 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">/ night</span>
                </p>
                <Link to="/contact" className="btn btn-navy">Reserve this {r.name.split(" ").pop()}</Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="container-lux py-28">
        <SectionHeading eyebrow="In every residence" title="Thoughtful, as standard" />
        <ul className="mx-auto mt-16 grid max-w-4xl gap-x-12 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
          {shared.map((s) => (
            <li key={s} className="flex items-start gap-3 border-b pb-5 text-navy">
              <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} /> {s}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
