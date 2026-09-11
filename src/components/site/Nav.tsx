import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ArrowUpRight, ChevronRight } from "lucide-react";

type NavLink = { label: string; to: string; hash?: string };

const LINKS: NavLink[] = [
  { label: "Menu", to: "/menu" },
  { label: "Our Story", to: "/", hash: "story" },
  { label: "Gallery", to: "/", hash: "gallery" },
  { label: "The Host", to: "/", hash: "owner" },
  { label: "Visit", to: "/", hash: "visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

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
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-tight text-cream">
              Crave<span className="text-gold italic">yard</span>
            </span>
            <span className="hidden md:inline text-[10px] font-sans tracking-[0.3em] text-muted-foreground uppercase">
              Est. Kochi
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className="relative text-sm text-cream/80 hover:text-cream transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/" hash="reserve" className="hidden md:inline-flex btn-gold">
              Reserve <ArrowUpRight className="size-4" />
            </Link>
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
            className="fixed inset-0 z-[60] bg-ink overflow-y-auto"
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
            <nav className="flex flex-col gap-2 px-6 pt-10 pb-16">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Link
                    to={l.to}
                    hash={l.hash}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl sm:text-5xl text-cream border-b border-border/50 py-4 flex items-center justify-between"
                  >
                    {l.label}
                    <ChevronRight className="size-6 text-gold" />
                  </Link>
                </motion.div>
              ))}
              <Link to="/" hash="reserve" onClick={() => setOpen(false)} className="btn-gold mt-10">
                Reserve a Table
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
