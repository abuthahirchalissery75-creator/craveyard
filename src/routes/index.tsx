import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  Menu as MenuIcon, X, MapPin, Phone, Clock, Instagram, Facebook,
  ArrowUpRight, Star, ChevronRight, Utensils, Flame, Leaf,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import heroMandi from "@/assets/hero-mandi.jpg";
import dishAlfaham from "@/assets/dish-alfaham.jpg";
import dishShawaya from "@/assets/dish-shawaya.jpg";
import dishShake from "@/assets/dish-shake.jpg";
import dishFried from "@/assets/dish-friedrice.jpg";
import dishJuice from "@/assets/dish-juice.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import owner from "@/assets/owner.jpg";

export const Route = createFileRoute("/")({
  component: CraveyardHome,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200" },
    ],
  }),
});

/* ------------------------------- Nav ---------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "#story", label: "Our Story" },
    { href: "#gallery", label: "Gallery" },
    { href: "#owner", label: "The Host" },
    { href: "#visit", label: "Visit" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-4"
            : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-tight text-cream">
              Crave<span className="text-gold italic">yard</span>
            </span>
            {/* <span className="hidden md:inline text-[10px] font-sans tracking-[0.3em] text-muted-foreground uppercase">
               Kochi
            </span> */}
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-cream/80 hover:text-cream transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#reserve" className="hidden md:inline-flex btn-gold">
              Reserve <ArrowUpRight className="size-4" />
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden grid size-11 place-items-center rounded-full border border-border text-cream"
              aria-label="Open menu"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl text-cream">
                Crave<span className="text-gold italic">yard</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-border text-cream"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-16">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                  className="font-display text-5xl text-cream border-b border-border/50 py-4 flex items-center justify-between"
                >
                  {l.label}
                  <ChevronRight className="size-6 text-gold" />
                </motion.a>
              ))}
              <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold mt-10">
                Reserve a Table
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------ Hero ---------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink noise">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroMandi}
          alt="Signature Craveyard mandi platter"
          className="h-full w-full object-cover object-center opacity-70"
          width={1600}
          height={1808}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink/50" />
      </motion.div>

      {/* smoke particles */}
      <div className="pointer-events-none absolute inset-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="absolute bottom-0 left-1/2 block h-40 w-40 rounded-full bg-gold/10 blur-3xl animate-smoke"
            style={{ animationDelay: `${i * 1.4}s`, left: `${20 + i * 15}%` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col justify-between px-6 lg:px-10 pt-32 pb-14 mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Edachira · Kochi · Kerala</span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-5xl font-display text-[13vw] leading-[0.95] text-cream sm:text-[9vw] lg:text-[7.2vw] text-balance"
          >
            Craveyard <br />
            <span className="italic gold-gradient-text">  Where every craving<span className="ml-5"></span> finds its home.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 max-w-xl text-xs text-cream/70 text-pretty"
          >
            {/* Made with quality. Served with warmth. Welcome to the family. */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="/menu" className="btn-gold">Explore the Menu</a>
            <a href="#reserve" className="btn-ghost">Reserve a Table</a>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}
            className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-cream/50"
          >
            <span>Open · 12:00 PM – 1:00 AM</span>
            <span className="h-px w-8 bg-cream/30" />
            <span>Dine · Delivery · Reserve</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col items-center gap-3 text-cream/60"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="relative block h-10 w-px bg-cream/20 overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-4 bg-gold animate-[smoke_2s_ease-in-out_infinite]" style={{ animation: "float-slow 2s ease-in-out infinite" }}/>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------------------- Marquee --------------------------------- */

function Marquee() {
  const words = [
    "Mandi",
    "Alfaham",
    "Shawaya",
    "Shawarma",
    "Grills",
    "Shakes",
    "Fried Rice",
    "Juices",
    "Noodles",
  ];

  return (
    <div className="relative border-y border-border/60 bg-ink py-8 overflow-hidden">
      
      <div className="flex w-max whitespace-nowrap animate-marquee">
        
        {[...Array(2)].map((_, r) => (
          <div
            key={r}
            className="flex items-center shrink-0"
            aria-hidden={r === 1}
          >
            {words.map((w, i) => (
              <span
                key={`${r}-${i}`}
                className="mx-10 flex items-center gap-10 font-display italic text-4xl md:text-6xl text-cream/80"
              >
                {w}

                <span className="text-gold text-2xl">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}

      </div>

    </div>
  );
}



/* ---------------------------- About ----------------------------------- */


function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  );

  const [activeImage, setActiveImage] = useState(0);

  const interiorImages = [
    {
      img: interior1,
      alt: "Craveyard dining room",
      number: "01 / AMBIENCE",
      title: "Warm lantern light.",
      subtitle: "Quiet oud in the air.",
    },
    {
      img: interior2,
      alt: "Craveyard restaurant interior",
      number: "02 / INTERIOR",
      title: "Made for long meals.",
      subtitle: "Good food. Better company.",
    },
    {
      img: interior3,
      alt: "Craveyard dining area",
      number: "03 / ATMOSPHERE",
      title: "A place to feel at home.",
      subtitle: "Where every table has a story.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) =>
        (current + 1) % interiorImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [interiorImages.length]);

  const stats = [
    { k: "Since", v: "2023" },
    { k: "Signature Dishes", v: "10+" },
    { k: "Guests Served", v: "180k" },
    { k: "Repeat Family", v: "92%" },
  ];

  return (
    <section
      ref={ref}
      id="story"
      className="relative py-32 lg:py-48 px-6 lg:px-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* ------------------------------------------------
            LEFT SIDE
        ------------------------------------------------ */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />

            <span className="eyebrow">
              The House of Craving
            </span>
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-cream text-balance">
            Not a restaurant.
            <br />

            <span className="italic gold-gradient-text">
              A feeling.
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-md text-pretty">
            Craveyard was built for the people who chase flavour
            the way others chase stars. Every plate, every corner,
            every candle — arranged so you feel less like a guest
            and more like the family we've been waiting for.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {stats.map((s) => (
              <div
                key={s.k}
                className="border-t border-border pt-4"
              >
                <div className="font-display text-4xl text-cream">
                  {s.v}
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.k}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ------------------------------------------------
            RIGHT SIDE
        ------------------------------------------------ */}
        <div className="lg:col-span-7 space-y-6">

          {/* ------------------------------------------------
              CINEMATIC IMAGE SLIDER
          ------------------------------------------------ */}
          <motion.div
            style={{ y }}
            className="relative aspect-[5/4] overflow-hidden rounded-sm bg-ink"
          >

            <AnimatePresence mode="sync">

              <motion.img
                key={activeImage}
                src={interiorImages[activeImage].img}
                alt={interiorImages[activeImage].alt}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                }}
                transition={{
                  opacity: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 10,
                    ease: "linear",
                  },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />

            </AnimatePresence>

            {/* Dark cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />

            {/* Bottom content */}
            <AnimatePresence mode="wait">

              <motion.div
                key={`text-${activeImage}`}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-6"
              >

                <div>
                  <div className="text-gold text-[10px] tracking-[0.3em] mb-2">
                    {interiorImages[activeImage].number}
                  </div>

                  <div className="font-display italic text-cream text-2xl md:text-3xl">
                    {interiorImages[activeImage].title}
                  </div>

                  <div className="mt-1 text-sm text-cream/70">
                    {interiorImages[activeImage].subtitle}
                  </div>
                </div>

              </motion.div>

            </AnimatePresence>

            {/* ------------------------------------------------
                SLIDE INDICATORS
            ------------------------------------------------ */}
            <div className="absolute bottom-7 right-7 flex gap-2">

              {interiorImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show interior image ${index + 1}`}
                  className={`h-1 transition-all duration-700 ${
                    activeImage === index
                      ? "w-10 bg-gold"
                      : "w-4 bg-cream/40 hover:bg-cream/70"
                  }`}
                />
              ))}

            </div>

          </motion.div>

          {/* ------------------------------------------------
              FEATURE CARDS
          ------------------------------------------------ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

            {/* Charcoal */}
            <div className="rounded-sm border border-border bg-surface/40 p-6 backdrop-blur-sm">
              <div className="mb-4 grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                <Flame className="size-5" />
              </div>

              <h3 className="font-display text-xl text-cream">
                Charcoal-fired grills
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Slow smoke, real fire, no shortcuts.
              </p>
            </div>

            {/* Sourced */}
            <div className="rounded-sm border border-border bg-surface/40 p-6 backdrop-blur-sm">
              <div className="mb-4 grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                <Leaf className="size-5" />
              </div>

              <h3 className="font-display text-xl text-cream">
                Sourced same-morning
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Kerala spice, Arabian tradition.
              </p>
            </div>

            {/* Hand plated */}
            <div className="rounded-sm border border-border bg-surface/40 p-6 backdrop-blur-sm">
              <div className="mb-4 grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                <Utensils className="size-5" />
              </div>

              <h3 className="font-display text-xl text-cream">
                Hand-plated always
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Every dish leaves the pass with intent.
              </p>
            </div>

            {/* Family */}
            <div className="rounded-sm border border-border bg-surface/40 p-6 backdrop-blur-sm">
              <div className="mb-4 grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                <Star className="size-5" />
              </div>

              <h3 className="font-display text-xl text-cream">
                Family first
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Loud tables. Long meals. Warm goodbyes.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
/* ---------------------------- Menu ------------------------------------ */

type Dish = {
  name: string;
  type: string;
  price: string;
  note: string;
  img: string;
};

const DISHES: Dish[] = [
  {
    name: "Royal Chicken Mandi",
    type: "Mandi",
    price: "₹ 320",
    note: "Saffron long-grain, smoked whole leg, 24-hour spiced marinade.",
    img: heroMandi,
  },
  {
    name: "Mutton Shawaya",
    type: "Shawaya",
    price: "₹ 640",
    note: "Slow-roasted shoulder, nuts, raisins, warm arabic bread.",
    img: dishShawaya,
  },
  {
    name: "Alfaham Half",
    type: "Grills",
    price: "₹ 280",
    note: "Charcoal-fired, ember-glazed, garlic-lemon dip.",
    img: dishAlfaham,
  },
  {
    name: "Wok Schezwan Rice",
    type: "Rice & Noodles",
    price: "₹ 210",
    note: "Cast-iron seared, house schezwan, flame-tossed.",
    img: dishFried,
  },
  {
    name: "Mango Malabar Shake",
    type: "Shakes",
    price: "₹ 160",
    note: "Alphonso, cardamom cream, saffron drizzle.",
    img: dishShake,
  },
  {
    name: "Cold-pressed Orange",
    type: "Juices",
    price: "₹ 120",
    note: "Nagpur oranges, pressed to order.",
    img: dishJuice,
  },
];

const CATEGORIES = [
  "All",
  "Mandi",
  "Shawaya",
  "Grills",
  "Rice & Noodles",
  "Shakes",
  "Juices",
];

function Menu() {
  const [cat, setCat] = useState("All");

  const filtered =
    cat === "All" ? DISHES : DISHES.filter((d) => d.type === cat);

  return (
    <section className="px-6 lg:px-10 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold" />

            <span className="eyebrow">
              Signature Selection
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-cream">
                The dishes that built the name.
              </h2>

              <p className="mt-4 text-muted-foreground text-lg">
                Full à la carte
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full border text-sm transition-all ${
                cat === c
                  ? "bg-gold text-ink border-gold"
                  : "border-border text-cream/70 hover:text-cream hover:border-gold/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((d, i) => (
              <motion.article
                key={d.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.7,
                  delay: (i % 3) * 0.08,
                }}
                className="group relative overflow-hidden rounded-sm bg-surface"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                  {/* Category */}
                  <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase text-gold bg-ink/70 border border-gold/40 px-3 py-1 rounded-full">
                    {d.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 -mt-16 relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-cream">
                      {d.name}
                    </h3>

                    <span className="font-display text-xl text-gold whitespace-nowrap">
                      {d.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {d.note}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Explore Full Menu Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/menu"
            className="btn-gold"
          >
            Explore the full menu
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
/* -------------------------- Chef Feature ------------------------------ */

function ChefFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  return (
    <section ref={ref} className="relative py-32 lg:py-48 px-6 lg:px-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--grad-radial-ember)" }} />
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
        <motion.div style={{ y: y1 }} className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={interior2} alt="Chef plating shawaya" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <motion.div style={{ y: y2 }} className="absolute -bottom-10 -right-6 md:right-[-4rem] hidden md:block w-56">
            <div className="rounded-sm bg-surface border border-gold/30 p-5 shadow-2xl">
              <div className="text-xs eyebrow">Chef's pick</div>
              <div className="mt-2 font-display text-2xl text-cream leading-tight">Firewood Mutton Shawaya</div>
              <div className="mt-2 text-xs text-muted-foreground">Served for two · 60 minutes</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6 lg:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Chef's Recommendation</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[1] text-balance">
            A dish worth <span className="italic gold-gradient-text">the wait.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg text-pretty">
            Marinated for eighteen hours in cardamom, black lime and rose,
            then wrapped and buried in glowing embers. Served whole, opened at
            your table with a slow lift of steam.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "18h", v: "Marination" },
              { k: "4h", v: "Charcoal roast" },
              { k: "2", v: "Servings" },
            ].map((s) => (
              <div key={s.k} className="border-t border-border pt-3">
                <div className="font-display text-3xl text-gold">{s.k}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="#reserve" className="btn-gold">Reserve this dish <ArrowUpRight className="size-4"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Gallery ---------------------------------- */

function Gallery() {
  const images = [
    { src: interior1, span: "md:col-span-8 md:row-span-2", alt: "Dining room" },
    { src: dishAlfaham, span: "md:col-span-4", alt: "Alfaham" },
    { src: dishShake, span: "md:col-span-4", alt: "Shake" },
    { src: interior2, span: "md:col-span-5", alt: "Plating" },
    { src: dishShawaya, span: "md:col-span-7", alt: "Shawaya" },
    { src: dishJuice, span: "md:col-span-4", alt: "Juice" },
    { src: interior3, span: "md:col-span-8", alt: "Family dining" },
  ];
  return (
    <section id="gallery" className="relative py-32 lg:py-48 px-6 lg:px-10 bg-ink">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Inside Craveyard</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-cream text-balance">
              A room that <span className="italic gold-gradient-text">remembers you.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] gap-3">
          {images.map((im, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-sm group ${im.span}`}
            >
              <img
                src={im.src}
                alt={im.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Testimonials ------------------------------ */

const TESTIMONIALS = [
  { name: "Ayesha R.", role: "Kochi", quote: "The mandi arrived like theatre — steam, silver platter, the whole room turned. We stayed three hours. Nobody rushed us. That's rare." },
  { name: "Rohan M.", role: "Bengaluru", quote: "Best alfaham I've had outside the Gulf. And somehow the owner remembered our anniversary from six months ago." },
  { name: "Fathima K.", role: "Ernakulam", quote: "It doesn't feel like a restaurant. It feels like being invited home by someone who really, really loves feeding people." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-32 lg:py-48 px-6 lg:px-10 overflow-hidden">
      <div className="mx-auto max-w-[1100px] text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Table Talk</span>
          <span className="h-px w-10 bg-gold" />
        </div>
        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-cream text-balance"
            >
              <span className="text-gold">"</span>
              {TESTIMONIALS[i].quote}
              <span className="text-gold">"</span>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="text-left">
            <div className="text-cream font-display text-lg">{TESTIMONIALS[i].name}</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{TESTIMONIALS[i].role}</div>
          </div>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="size-4 fill-gold text-gold" />)}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px transition-all ${idx === i ? "w-12 bg-gold" : "w-6 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Owner ------------------------------------- */

function OwnerSection() {
  return (
    <section id="owner" className="relative py-32 lg:py-48 px-6 lg:px-10 bg-ink overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={owner} alt="The host of Craveyard" loading="lazy" className="h-full w-full object-cover grayscale contrast-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="font-display text-2xl text-cream">The Host</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold">Founder · Craveyard</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Meet the Man Behind the Fire</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-cream text-balance">
            "I don't own a restaurant.<br/>
            <span className="italic gold-gradient-text">I host a family every night."</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground max-w-xl text-pretty">
            <p>
              He grew up watching his mother stretch small ingredients into big feasts.
              Somewhere between the mandi pit and the last table of the night, that
              feeling never left him.
            </p>
            <p>
              Craveyard is his answer to a simple question: what if the person who
              greets you knows your name, your child's name, and the exact way you
              like your alfaham done?
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="font-display italic text-4xl text-gold">— The Host</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Reserve ----------------------------------- */

function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    occasion: "",
    notes: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919778238561"; // <-- Replace with your WhatsApp number

    const formattedDate = form.date
      ? new Date(form.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";
    
    // Format Time
const [hours, minutes] = form.time.split(":");

const hour = Number(hours);

const formattedTime = `${String(hour % 12 || 12).padStart(2, "0")}:${minutes} ${
  hour >= 12 ? "PM" : "AM"
}`;

    const message = `

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CRAVEYARD
     Reservation Request
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

*Guest*
• ${form.name}

*Contact*
• +91${form.phone}

*Date*
• ${form.date}

*Time*
• ${formattedTime}

*Guests*
• ${form.guests} Persons


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I would like to reserve a table.

Kindly confirm my booking.

Thank you.
❤️`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    setSent(true);

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="reserve"
      className="relative py-32 lg:py-48 px-6 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--grad-radial-ember)" }}
      />

      <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">
        {/* Left */}

        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Reserve your table</span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[1.02] text-balance">
            Save your{" "}
            <span className="italic gold-gradient-text">
              seat by the fire.
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground max-w-md text-pretty">
            Weekends run full. We'll confirm within the hour with a WhatsApp
            message. Family bookings and private nights welcome.
          </p>

          <div className="mt-10 space-y-4 text-sm text-cream/80">
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-gold" />
              +91 62385 75390
            </div>

            <div className="flex items-center gap-3">
              <Clock className="size-4 text-gold" />
              11:00 AM — 11:30 PM · Every day
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="size-4 text-gold" />
              Edachira, Kochi, Kerala
            </div>
          </div>
        </div>

        {/* Form */}

        <form
          onSubmit={handleReserve}
          className="lg:col-span-7 rounded-sm border border-border bg-surface/50 backdrop-blur-sm p-8 md:p-12 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field
              label="Full name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Field
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <Field
              label="Date"
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              required
            />

            <Field
              label="Time"
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              required
            />

            <Field
              label="Guests"
              name="guests"
              type="number"
              value={form.guests}
              onChange={handleChange}
              placeholder="1"
              required
            />

            <Field
              label="Occasion"
              name="occasion"
              value={form.occasion}
              onChange={handleChange}
              placeholder="Birthday, family, casual..."
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
              Notes for the kitchen
            </label>

            <textarea
              rows={3}
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Allergies, seating preference..."
              className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-cream placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="pt-4 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-muted-foreground">
              By reserving you agree to our 15-min hold policy.
            </p>

            <button type="submit" className="btn-gold">
              {sent ? "Opening WhatsApp..." : "Reserve now"}

              <ArrowUpRight className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* -------------------------- Field ----------------------------------- */

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-cream placeholder:text-muted-foreground/60 transition-colors"
      />
    </div>
  );
}
/* -------------------------- Location ---------------------------------- */

function Location() {
  return (
    <section id="visit" className="relative bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Find your way in</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-cream text-balance max-w-4xl">
          Edachira, Kochi.<br />
          <span className="italic gold-gradient-text">Follow the smoke.</span>
        </h2>
      </div>
      <div className="relative mt-16 h-[70vh] w-full overflow-hidden">
        <iframe
          title="Craveyard location"
          src="https://www.google.com/maps?q=Edachira,Kochi,Kerala&output=embed"
          className="absolute inset-0 h-full w-full grayscale contrast-125 opacity-70"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div className="absolute bottom-10 left-6 lg:left-10 max-w-sm rounded-sm border border-gold/30 bg-ink/80 backdrop-blur-md p-6">
          <div className="eyebrow">Craveyard</div>
          <div className="mt-2 font-display text-2xl text-cream">Edachira, Kochi</div>
          <div className="mt-3 text-sm text-muted-foreground">Kerala 682030, India</div>
          <a href="https://maps.google.com/?q=Edachira,Kochi" target="_blank" rel="noreferrer" className="mt-5 inline-flex btn-ghost">
            Open in Maps <ArrowUpRight className="size-4"/>
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Footer ----------------------------------- */

function Footer() {
  return (
    <footer className="bg-ink border-t border-border pt-24 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-4xl text-cream">
              Crave<span className="text-gold italic">yard</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-sm text-pretty">
              A premium mandi & Arabian house in Edachira, Kochi. Come hungry.
              Leave family.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-border text-cream hover:border-gold hover:text-gold transition-colors"><Instagram className="size-4"/></a>
              <a href="#" aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-border text-cream hover:border-gold hover:text-gold transition-colors"><Facebook className="size-4"/></a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Menu</div>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li><a href="#menu" className="hover:text-gold">Signature dishes</a></li>
              <li><a href="#story" className="hover:text-gold">Our story</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#reserve" className="hover:text-gold">Reserve</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow mb-4">Visit</div>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li className="flex items-start gap-3"><MapPin className="size-4 mt-0.5 text-gold shrink-0"/>Edachira, Kochi, Kerala</li>
              <li className="flex items-start gap-3"><Clock className="size-4 mt-0.5 text-gold shrink-0"/>11:00 AM – 11:30 PM · Everyday</li>
              <li className="flex items-start gap-3"><Phone className="size-4 mt-0.5 text-gold shrink-0"/>+91 000 000 0000</li>
            </ul>
          </div>
        </div>
        <div className="hairline my-14" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Craveyard. All flavours reserved.</div>
          <div className="font-display italic">Where every craving finds its home.</div>
        </div>
      </div>
    </footer>
  );
}

/* ============================ Page =================================== */

function CraveyardHome() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <ChefFeature />
      <Gallery />
      <Testimonials />
      <OwnerSection />
      <Reserve />
      <Location />
      <Footer />
    </main>
  );
}
