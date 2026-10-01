import { createFileRoute, Link } from "@tanstack/react-router";
import { Waves, Leaf, UtensilsCrossed, KeyRound, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { rooms, images, gallery } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { BookingPanel, CtaBand, RoomCard, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azure Haven — Where the Ocean Meets Tranquility" },
      { name: "description", content: "A secluded luxury boutique resort on the Goa coast. Ocean-view suites, garden villas, wellness and coastal dining." },
      { property: "og:title", content: "Azure Haven — Where the Ocean Meets Tranquility" },
      { property: "og:description", content: "A secluded luxury boutique resort on the Goa coast, designed for unforgettable stays." },
    ],
  }),
  component: Home,
});

const features = [
  { Icon: Waves, title: "Ocean Views", text: "Every suite and terrace is oriented to the sea, so the horizon is always part of your day." },
  { Icon: Leaf, title: "Wellness", text: "Ayurvedic rituals, sunrise yoga and a spa set within a quiet frangipani garden." },
  { Icon: UtensilsCrossed, title: "Dining", text: "Coastal Goan cuisine reimagined with the day's catch and herbs from our kitchen garden." },
  { Icon: KeyRound, title: "Private Retreat", text: "Only twenty-two keys, hidden among palms — space, silence and attentive, unseen service." },
];

const reviews = [
  { quote: "The kind of quiet you forget exists. We woke to the sound of waves and never wanted to leave our terrace.", name: "Ananya & Rohan", place: "Mumbai" },
  { quote: "Impeccable, warm service without ever feeling formal. Dinner at the water's edge was the highlight of our year.", name: "Claire M.", place: "London" },
  { quote: "Our Garden Villa felt like a private home in the jungle. Thoughtful details everywhere you looked.", name: "Vikram S.", place: "Bengaluru" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Infinity pool overlooking the ocean at Azure Haven" width={1920} height={1088} className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-lux relative pt-24 text-center">
          <p className="eyebrow animate-fade-up">A boutique coastal retreat · Goa</p>
          <h1 className="animate-fade-up mx-auto mt-6 max-w-4xl text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-8xl" style={{ animationDelay: "150ms" }}>
            Where the Ocean Meets <em className="text-gold-soft">Tranquility</em>
          </h1>
          <p className="animate-fade-up mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ivory/85" style={{ animationDelay: "300ms" }}>
            Escape to Azure Haven, a secluded coastal retreat designed for unforgettable stays, serene mornings, and effortless luxury.
          </p>
          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "450ms" }}>
            <Link to="/contact" className="btn btn-gold">Book Your Stay</Link>
            <Link to="/rooms" className="btn btn-outline-light">Explore Rooms</Link>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="relative z-10 -mt-16 md:-mt-20">
        <div className="container-lux">
          <BookingPanel />
        </div>
      </section>

      {/* Welcome */}
      <section className="container-lux grid gap-14 py-28 md:grid-cols-12 md:py-40">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Welcome</p>
          <h2 className="mt-5 text-4xl leading-[1.08] md:text-6xl">A quiet stretch of coast, made for slowing down.</h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-12">
          <p>
            Tucked between the palms of North Goa's Mandrem shore, Azure Haven is a boutique resort of twenty-two suites and villas — each designed to bring the sea, the light and the stillness inside.
          </p>
          <p>
            Here, mornings begin with salt air and filter coffee, afternoons drift by the pool, and evenings close with candlelit dinners by the water. Everything else, we take care of.
          </p>
          <Link to="/about" className="link-line inline-block pt-2 text-[0.74rem] font-medium tracking-[0.24em] uppercase text-navy">Discover our story</Link>
        </Reveal>
      </section>

      {/* Featured rooms */}
      <section className="bg-sand/60 py-28 md:py-36">
        <div className="container-lux">
          <SectionHeading eyebrow="Rooms & Suites" title="Featured Rooms">
            Three ways to stay, each with its own character — and all with the sea never far away.
          </SectionHeading>
          <div className="mt-20 grid gap-14 md:grid-cols-3 md:gap-8 lg:gap-12">
            {rooms.map((r, i) => <RoomCard key={r.slug} room={r} delay={i * 120} />)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container-lux py-28 md:py-36">
        <SectionHeading eyebrow="Why Azure Haven" title="Crafted for the art of rest" />
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100} className="group bg-background p-10 transition-colors duration-500 hover:bg-ivory">
              <Icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1} />
              <h3 className="mt-8 text-3xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience split */}
      <section className="bg-navy text-ivory">
        <div className="grid md:grid-cols-2">
          <div className="img-zoom relative min-h-[520px] md:min-h-[760px]">
            <img src={images.experience} alt="Guest walking on the beach at sunrise" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex items-center px-6 py-20 md:px-16 lg:px-24">
            <Reveal className="max-w-lg">
              <p className="eyebrow">The Experience</p>
              <h2 className="mt-5 text-4xl leading-[1.08] text-ivory md:text-6xl">Experience Azure Haven</h2>
              <p className="mt-8 text-lg leading-relaxed text-ivory/75">
                Walk barefoot along an empty shore at first light. Drift between the spa and the sea. Watch fishing boats return at dusk from your terrace, a glass of something cold in hand.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ivory/75">
                Our hosts curate each day around you — private beach dinners, spice-garden walks, sunset sails along the Konkan coast.
              </p>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ivory/15 pt-8">
                {[["22", "Suites & villas"], ["400m", "Private shoreline"], ["1:3", "Host to guest"]].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-display text-4xl text-gold-soft">{n}</dt>
                    <dd className="mt-2 text-xs tracking-[0.15em] uppercase text-ivory/60">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-lux py-28 md:py-36">
        <SectionHeading eyebrow="Guest Reviews" title="Words from our guests">
          Sample testimonials for this concept project.
        </SectionHeading>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 120} className="flex flex-col border bg-ivory p-10 transition-shadow duration-500 hover:shadow-soft">
              <Quote className="h-7 w-7 text-gold" strokeWidth={1} />
              <p className="mt-6 flex-1 font-display text-2xl leading-snug text-navy">“{r.quote}”</p>
              <div className="mt-8 flex items-center gap-4 border-t pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center bg-navy font-display text-lg text-gold-soft">{r.name[0]}</span>
                <div>
                  <p className="text-sm font-medium text-navy">{r.name}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">{r.place}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="pb-28 md:pb-36">
        <div className="container-lux">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading align="left" eyebrow="Gallery" title="Explore Our Gallery" />
            <Reveal><Link to="/gallery" className="btn btn-outline">View Full Gallery</Link></Reveal>
          </div>
          <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
            {[
              { item: gallery[0], cls: "col-span-2 row-span-2" },
              { item: gallery[3], cls: "" },
              { item: gallery[5], cls: "row-span-2" },
              { item: gallery[4], cls: "" },
              { item: gallery[7], cls: "col-span-2 md:col-span-1" },
              { item: gallery[1], cls: "hidden md:block" },
            ].map(({ item, cls }, i) => (
              <Reveal key={i} delay={i * 80} className={`img-zoom ${cls}`}>
                <Link to="/gallery" aria-label={`Open gallery: ${item.title}`} className="block h-full w-full">
                  <img src={item.src} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
