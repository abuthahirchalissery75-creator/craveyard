import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame } from "lucide-react";

import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { MENU_SECTIONS } from "@/data/menu";
import heroMandi from "@/assets/hero-mandi.jpg";

const TITLE = "Full Menu — Mandi, Alfaham & Shawaya | Craveyard Kochi";
const DESC =
  "Explore the complete Craveyard menu: charcoal mandi, alfaham, shawaya, biryani, grills, breads, shakes and fresh juices in Edachira, Kochi. Prices included.";
const URL = "https://crave-beyond-experience.lovable.app/menu";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "restaurant.menu" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Craveyard Full Menu",
          url: URL,
          inLanguage: "en-IN",
          hasMenuSection: MENU_SECTIONS.map((s) => ({
            "@type": "MenuSection",
            name: s.title,
            description: s.blurb,
            hasMenuItem: s.items.map((i) => ({
              "@type": "MenuItem",
              name: i.name,
              description: i.note,
              offers: {
                "@type": "Offer",
                price: i.price.replace(/[^\d]/g, ""),
                priceCurrency: "INR",
              },
            })),
          })),
        }),
      },
    ],
  }),
});

function MenuPage() {
  useSmoothScroll();
  const [active, setActive] = useState<string>(MENU_SECTIONS[0].id);

  return (
    <main className="bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink noise pt-40 pb-20 lg:pt-52 lg:pb-28 px-6 lg:px-10">
        <img
          src={heroMandi}
          alt="Charcoal-smoked mandi platter at Craveyard, Kochi"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">The Full Menu</span>
          </div>
          <h1 className="font-display text-5xl md:text-8xl text-cream leading-[0.95] text-balance max-w-4xl">
            Everything we <span className="italic gold-gradient-text">cook with fire.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            Mandi, shawaya, alfaham, breads, shakes and cold-pressed
            juices — served every day in Edachira, Kochi from 12:00 PM to 01:00 AM.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" hash="reserve" className="btn-gold">
              Reserve a table <ArrowUpRight className="size-4" />
            </Link>
            <a href="tel:+916238575390" className="btn-ghost">Call to order</a>
          </div>
        </div>
      </section>

      {/* Sticky section nav */}
      <div className="sticky top-[72px] z-40 bg-background/85 backdrop-blur-xl border-y border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {MENU_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className={`shrink-0 px-5 py-2 rounded-full border text-sm transition-all ${
                  active === s.id
                    ? "bg-gold text-ink border-gold"
                    : "border-border text-cream/70 hover:text-cream hover:border-gold/50"
                }`}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] space-y-24 lg:space-y-32">
          {MENU_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-40">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-44">
                    {section.hero && (
                      <div className="mb-6 aspect-[4/3] overflow-hidden rounded-sm">
                        <img
                          src={section.hero}
                          alt={`${section.title} at Craveyard`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1.6s] hover:scale-110"
                        />
                      </div>
                    )}
                    <h2 className="font-display text-4xl md:text-5xl text-cream">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground text-pretty max-w-xs">
                      {section.blurb}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ul className="divide-y divide-border/60 border-t border-border/60">
                    {section.items.map((item, i) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.3) }}
                        className="group py-6 flex items-start justify-between gap-6"
                      >
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors">
                              {item.name}
                            </h3>
                            {item.tag && (
                              <span className="inline-flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase text-gold border border-gold/40 px-2.5 py-1 rounded-full">
                                {item.tag === "Spicy" && <Flame className="size-3" />}
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground text-pretty">
                            {item.note}
                          </p>
                        </div>
                        <div className="shrink-0 font-display text-xl text-gold tabular-nums">
                          {item.price}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-28">
        <div className="mx-auto max-w-[1400px] rounded-sm border border-gold/25 bg-surface p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-cream text-balance">
            Hungry yet? <span className="italic gold-gradient-text">Save your table.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prices are inclusive of taxes. Menu may vary with seasonal availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="reserve" className="btn-gold">Reserve a table</Link>
            <Link to="/" className="btn-ghost">Back to home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
