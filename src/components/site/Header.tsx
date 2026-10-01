import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`group flex flex-col leading-none ${light ? "text-ivory" : "text-navy"}`} aria-label="Azure Haven home">
      <span className="font-display text-2xl tracking-[0.18em] uppercase">Azure Haven</span>
      <span className="mt-1 text-[0.6rem] tracking-[0.5em] uppercase text-gold">Goa · India</span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-navy/95 py-4 backdrop-blur-md shadow-soft" : "bg-transparent py-6"
      }`}
    >
      <div className="container-lux flex items-center justify-between gap-6">
        <Logo light />
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="link-line text-[0.74rem] font-normal tracking-[0.22em] uppercase text-ivory/85 transition-colors hover:text-ivory data-[status=active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn btn-gold hidden !px-6 !py-3 sm:inline-flex">
            Book Your Stay
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-navy transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="container-lux flex items-center justify-between py-6">
          <Logo light />
          <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center text-ivory" aria-label="Close menu">
            <X className="h-6 w-6" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="container-lux mt-10 flex flex-col gap-6" aria-label="Mobile">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="font-display text-4xl text-ivory transition-colors hover:text-gold data-[status=active]:text-gold"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-gold mt-6 self-start">
            Book Your Stay
          </Link>
        </nav>
      </div>
    </header>
  );
}
