import { createFileRoute } from "@tanstack/react-router";
import { Sun, HandHeart, Sprout, Recycle, Droplets, Fish } from "lucide-react";
import { images } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Azure Haven Goa" },
      { name: "description", content: "The story, philosophy and sustainability commitments behind Azure Haven, a boutique coastal resort in Goa." },
      { property: "og:title", content: "Our Story — Azure Haven Goa" },
      { property: "og:description", content: "A small resort built around stillness, the sea and genuinely warm hospitality." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: Sun, title: "Unhurried", text: "We design every moment around your pace, not a schedule." },
  { Icon: HandHeart, title: "Heartfelt", text: "Hospitality rooted in Goan warmth — personal, intuitive, sincere." },
  { Icon: Sprout, title: "Rooted", text: "Local craft, local produce and local people at the centre of all we do." },
];

const green = [
  { Icon: Droplets, title: "Water", text: "Rainwater harvesting and greywater recycling irrigate our gardens year-round." },
  { Icon: Recycle, title: "Zero single-use plastic", text: "Glass-bottled spring water, refillable amenities and plastic-free rooms." },
  { Icon: Fish, title: "Ocean care", text: "Monthly beach clean-ups and support for Olive Ridley turtle nesting at Morjim." },
];

function AboutPage() {
  return (
    <>
      <PageHero image={images.exterior} eyebrow="Our Story" title="A haven, quietly made">
        Born from a love of the Konkan coast and the belief that true luxury is space, light and time.
      </PageHero>

      <section className="container-lux grid gap-14 py-28 md:grid-cols-12 md:py-40">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">The beginning</p>
          <h2 className="mt-5 text-4xl leading-[1.08] md:text-6xl">From a family beach house to a coastal sanctuary.</h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-12">
          <p>
            Azure Haven began as a single whitewashed house on the Mandrem shore, where friends would gather for long lunches that stretched into sunsets. Over the years, those gatherings shaped a simple idea: a place where everyone feels like a returning guest.
          </p>
          <p>
            Today, our twenty-two suites and villas sit lightly among coconut palms, built by local artisans using laterite stone, reclaimed teak and lime plaster — materials that belong to this coast.
          </p>
        </Reveal>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="img-zoom relative min-h-[460px] md:min-h-[680px]">
          <img src={images.spa} alt="The Frangipani Spa" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="img-zoom relative min-h-[460px] md:min-h-[680px]">
          <img src={images.restaurant} alt="Seaside dining at dusk" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="bg-navy py-28 text-ivory md:py-40">
        <div className="container-lux text-center">
          <Reveal>
            <p className="eyebrow">Our philosophy</p>
            <blockquote className="mx-auto mt-8 max-w-4xl font-display text-3xl leading-snug text-ivory md:text-5xl">
              “We believe the finest hospitality is felt, not seen — a quiet attentiveness that leaves you free to simply be.”
            </blockquote>
            <p className="mt-8 text-xs tracking-[0.3em] uppercase text-ivory/60">The Azure Haven Family</p>
          </Reveal>
        </div>
      </section>

      <section className="container-lux py-28 md:py-36">
        <SectionHeading eyebrow="Our values" title="What guides us" />
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {values.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 120} className="border-t border-navy pt-8">
              <Icon className="h-8 w-8 text-gold" strokeWidth={1} />
              <h3 className="mt-6 text-3xl">{title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="container-lux grid items-center gap-14 py-28 md:grid-cols-12 md:py-36">
          <Reveal className="img-zoom md:col-span-5">
            <img src={images.ocean} alt="Calm Arabian Sea" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <SectionHeading align="left" eyebrow="Sustainability" title="Caring for the coast we call home">
              Luxury and responsibility belong together. Our commitments are quiet, practical and ongoing.
            </SectionHeading>
            <div className="mt-12 space-y-8">
              {green.map(({ Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 100} className="flex gap-5">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.2} />
                  <div>
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
