import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory/80">
      <div className="container-lux grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-[0.18em] uppercase text-ivory">Azure Haven</p>
          <p className="mt-4 font-display text-xl italic text-gold-soft">Where the ocean meets tranquility.</p>
          <div className="mt-8 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href={`https://www.${label.toLowerCase()}.com`}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Explore</p>
          <ul className="mt-6 space-y-3 text-sm">
            {(
              [
                ["/", "Home"],
                ["/rooms", "Rooms & Suites"],
                ["/about", "Our Story"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ] as const
            ).map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="link-line transition-colors hover:text-ivory">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow">Visit</p>
          <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed">
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-line hover:text-ivory">{contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="link-line hover:text-ivory">{contact.email}</a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-lux flex flex-col gap-2 py-6 text-xs tracking-wide text-ivory/55 sm:flex-row sm:justify-between">
          <p>© 2026 Azure Haven</p>
          <p>Concept website designed &amp; developed by Sneha</p>
        </div>
      </div>
    </footer>
  );
}
