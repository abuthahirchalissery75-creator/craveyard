import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border pt-24 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-4xl text-cream">
              Crave<span className="text-gold italic">yard</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-sm text-pretty">
              A premium mandi &amp; Arabian house in Edachira, Kochi. Come hungry.
              Leave family.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="grid size-11 place-items-center rounded-full border border-border text-cream hover:border-gold hover:text-gold transition-colors"><Instagram className="size-4"/></a>
              <a href="#" aria-label="Facebook" className="grid size-11 place-items-center rounded-full border border-border text-cream hover:border-gold hover:text-gold transition-colors"><Facebook className="size-4"/></a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow mb-4">Explore</div>
            <ul className="space-y-3 text-cream/80 text-sm">
              <li><Link to="/menu" className="hover:text-gold">Full menu</Link></li>
              <li><Link to="/" hash="story" className="hover:text-gold">Our story</Link></li>
              <li><Link to="/" hash="gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link to="/" hash="reserve" className="hover:text-gold">Reserve</Link></li>
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
