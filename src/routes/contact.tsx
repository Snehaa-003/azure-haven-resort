import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Check, Plane } from "lucide-react";
import { contact, images } from "@/lib/content";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Azure Haven Goa" },
      { name: "description", content: "Contact Azure Haven to book your stay or plan a private event at our boutique resort in North Goa." },
      { property: "og:title", content: "Contact & Reservations — Azure Haven Goa" },
      { property: "og:description", content: "Send an inquiry and our reservations team will be in touch within 24 hours." },
    ],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (form.name.trim().length < 2) er.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Please enter a valid email.";
    if (form.phone && !/^[+\d\s()-]{7,}$/.test(form.phone)) er.phone = "Please enter a valid phone number.";
    if (form.message.trim().length < 10) er.message = "Please share a few more details.";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  const label = "block text-[0.66rem] font-medium tracking-[0.26em] uppercase text-muted-foreground";
  const field = (k: keyof typeof form) => ({
    id: k,
    value: form[k],
    onChange: (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value }),
    "aria-invalid": !!errors[k],
    className: "field",
  });

  const info = [
    { Icon: MapPin, label: "Address", value: contact.address },
    { Icon: Phone, label: "Reservations", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: Clock, label: "Front desk", value: "Open 24 hours · Check-in 2pm · Check-out 11am" },
  ];

  return (
    <>
      <PageHero image={images.restaurant} eyebrow="Contact" title="Begin your stay">
        Our reservations team will be delighted to help you plan every detail of your escape.
      </PageHero>

      <section className="container-lux grid gap-16 py-28 md:grid-cols-12 md:py-36">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-5 text-4xl leading-[1.08] md:text-5xl">We'd love to hear from you.</h2>
          <ul className="mt-12 space-y-8">
            {info.map(({ Icon, label: l, value, href }) => (
              <li key={l} className="flex gap-5">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} />
                <div>
                  <p className={label}>{l}</p>
                  {href ? (
                    <a href={href} className="link-line mt-2 inline-block text-navy">{value}</a>
                  ) : (
                    <p className="mt-2 text-navy">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6 md:col-start-7">
          <div className="bg-ivory p-8 shadow-soft md:p-12">
            {sent ? (
              <div role="status" className="py-12 text-center animate-in fade-in duration-500">
                <span className="mx-auto grid h-16 w-16 place-items-center border border-gold text-gold">
                  <Check className="h-7 w-7" strokeWidth={1.2} />
                </span>
                <h3 className="mt-8 text-4xl">Thank you, {form.name.split(" ")[0]}.</h3>
                <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted-foreground">
                  Your inquiry has been received. Our reservations team will reply to {form.email} within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="btn btn-outline mt-10"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-8">
                <h3 className="text-3xl">Send an inquiry</h3>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>Name</label>
                    <input {...field("name")} autoComplete="name" placeholder="Your full name" />
                    {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>Email</label>
                    <input {...field("email")} type="email" autoComplete="email" placeholder="you@example.com" />
                    {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className={label}>Phone</label>
                  <input {...field("phone")} type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
                  {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className={label}>Message</label>
                  <textarea {...field("message")} rows={5} placeholder="Tell us about your dates, guests and any special requests" className="field resize-none" />
                  {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>
                <button type="submit" className="btn btn-navy w-full sm:w-auto">Send Inquiry</button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <section className="bg-sand/60 py-28">
        <div className="container-lux grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Location</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Finding us</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              On the quiet northern shore of Mandrem, between Ashwem and Arambol — far enough from the crowds, close enough to explore.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-navy">
              <li className="flex gap-3"><Plane className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} /> Mopa International Airport — 25 min</li>
              <li className="flex gap-3"><Plane className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} /> Dabolim Airport — 75 min</li>
            </ul>
          </Reveal>
          <Reveal delay={150} className="md:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden border bg-ivory" role="img" aria-label="Map placeholder showing Azure Haven location">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-sea/25" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <span className="grid h-14 w-14 place-items-center bg-navy text-gold shadow-soft"><MapPin className="h-6 w-6" strokeWidth={1.3} /></span>
                <span className="mt-3 bg-ivory px-4 py-2 font-display text-lg text-navy shadow-soft">Azure Haven</span>
              </div>
              <p className="absolute bottom-4 left-4 text-[0.66rem] tracking-[0.22em] uppercase text-muted-foreground">Map placeholder · Mandrem, North Goa</p>
              <p className="absolute right-6 top-6 font-display text-xl italic text-navy/60">Arabian Sea</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
