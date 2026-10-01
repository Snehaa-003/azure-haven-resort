import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import type { Room } from "@/lib/content";
import { images } from "@/lib/content";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-5 text-4xl leading-[1.08] md:text-5xl lg:text-6xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
      {children && (
        <p className={`mt-6 text-base leading-relaxed md:text-lg ${light ? "text-ivory/75" : "text-muted-foreground"}`}>{children}</p>
      )}
    </Reveal>
  );
}

export function PageHero({ image, eyebrow, title, children }: { image: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden">
      <img src={image} alt="" className="animate-slow-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-lux relative pb-20 pt-40 md:pb-28">
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up mt-5 max-w-3xl text-5xl leading-[1.02] text-ivory md:text-7xl" style={{ animationDelay: "120ms" }}>
          {title}
        </h1>
        {children && (
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ivory/80" style={{ animationDelay: "240ms" }}>
            {children}
          </p>
        )}
      </div>
    </section>
  );
}

export function RoomCard({ room, delay = 0 }: { room: Room; delay?: number }) {
  return (
    <Reveal delay={delay} className="group flex flex-col">
      <div className="img-zoom relative aspect-[4/5]">
        <img src={room.image} alt={room.name} loading="lazy" width={1200} height={912} className="h-full w-full object-cover" />
        <span className="absolute left-5 top-5 bg-ivory/95 px-3 py-1.5 text-[0.68rem] tracking-[0.2em] uppercase text-navy">
          {room.size}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-7">
        <h3 className="text-3xl text-navy">{room.name}</h3>
        <p className="mt-3 text-muted-foreground">{room.short}</p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t pt-5">
          <p className="font-display text-2xl text-navy">
            {room.price.split(" / ")[0]}
            <span className="ml-1 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground">/ night</span>
          </p>
          <Link
            to="/rooms"
            hash={room.slug}
            className="group/link inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.22em] uppercase text-navy transition-colors hover:text-gold"
          >
            View Details <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

export function BookingPanel({ className = "" }: { className?: string }) {
  const today = new Date().toISOString().slice(0, 10);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setResult(null);
    if (!checkIn || !checkOut) return setError("Please choose both dates.");
    if (checkOut <= checkIn) return setError("Check-out must be after check-in.");
    setError(null);
    const nights = Math.round((+new Date(checkOut) - +new Date(checkIn)) / 86400000);
    setResult(`Wonderful — rooms are available for ${nights} night${nights > 1 ? "s" : ""} for ${guests} guest${guests === "1" ? "" : "s"}. Our reservations team will be delighted to confirm.`);
  };

  const label = "block text-[0.66rem] font-medium tracking-[0.26em] uppercase text-muted-foreground";
  return (
    <div className={`bg-ivory p-6 shadow-soft md:p-10 ${className}`}>
      <form onSubmit={submit} className="grid gap-6 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:gap-8" noValidate>
        <div>
          <label htmlFor="ci" className={label}>Check-in</label>
          <input id="ci" type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="field" />
        </div>
        <div>
          <label htmlFor="co" className={label}>Check-out</label>
          <input id="co" type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="field" />
        </div>
        <div>
          <label htmlFor="gu" className={label}>Guests</label>
          <select id="gu" value={guests} onChange={(e) => setGuests(e.target.value)} className="field">
            {["1", "2", "3", "4"].map((g) => (
              <option key={g} value={g}>{g} {g === "1" ? "Guest" : "Guests"}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-navy w-full md:w-auto">Check Availability</button>
      </form>
      {(error || result) && (
        <p role="status" className={`mt-6 flex items-start gap-3 text-sm ${error ? "text-destructive" : "text-navy"}`}>
          {!error && <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />}
          {error ?? result}
        </p>
      )}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img src={images.sunset} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="container-lux relative py-32 text-center md:py-44">
        <Reveal>
          <p className="eyebrow">Your escape awaits</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-5xl leading-[1.05] text-ivory md:text-7xl">Ready for Your Escape?</h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ivory/75">
            Reserve your suite by the sea and let the slow rhythm of the coast take over.
          </p>
          <Link to="/contact" className="btn btn-gold mt-10">Book Your Stay</Link>
        </Reveal>
      </div>
    </section>
  );
}
